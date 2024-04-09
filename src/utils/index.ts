export function algumCampoVazio(data: any) {
    const algumCampoVazio = Object.entries(data)
        .filter(([_, value]) => value === "")
        .length > 0;
    if (algumCampoVazio) return true
}