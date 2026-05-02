import * as vscode from 'vscode'

const PLUGIN_NAME = 'rtk-to-endpoints'

interface TypeScriptApi {
  getAPI(version: 0): {
    configurePlugin(pluginId: string, configuration: object): void
  } | undefined
}

export async function activate(context: vscode.ExtensionContext) {
  const tsExtension = vscode.extensions.getExtension<TypeScriptApi>(
    'vscode.typescript-language-features'
  )

  if (!tsExtension) {
    console.warn('[rtk-to-endpoints] TypeScript language features extension not found.')
    return
  }

  await tsExtension.activate()
  const tsApi = tsExtension.exports

  if (!tsApi?.getAPI) {
    console.warn('[rtk-to-endpoints] TypeScript API not available.')
    return
  }

  const api = tsApi.getAPI(0)
  if (api) {
    api.configurePlugin(PLUGIN_NAME, {})
  }
}

export function deactivate() {}
