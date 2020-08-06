
export function verified(dom){
    if(dom.name && dom.owner && dom.phone && dom.date && dom.hour && dom.sintomas)
        return true;
    return false;
}