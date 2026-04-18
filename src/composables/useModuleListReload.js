import { onMounted, watch } from 'vue'

/**
 * Re-run list initialization when a module key changes on a reused route component.
 * @param {() => string} keySource getter returning current module key
 * @param {() => Promise<void>} reload reload meta + list
 * @param {() => (void|Promise<void>)} [reset] optional reset of local UI state
 */
export function useModuleListReload(keySource, reload, reset) {
  const runReload = async () => {
    await reload()
  }

  onMounted(runReload)

  watch(keySource, async () => {
    if (reset) await reset()
    await runReload()
  })
}

