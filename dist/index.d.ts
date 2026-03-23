interface PluginApi {
    registerTool: (tool: any) => void;
}
declare const moltbookPlugin: {
    id: string;
    name: string;
    description: string;
    register(api: PluginApi): void;
};
export default moltbookPlugin;
//# sourceMappingURL=index.d.ts.map