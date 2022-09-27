
/**
 * add finding-ref to existing finding if same word
 * remove all ref from existing finding if it's not present in findings anymore
 *  (e.g. a word has been found in a past scan, in the mean time the article was updated / fixed, 
 *  => the current rescan does not find that same word anymore.
 *  Hence that existing finding must be updated to not include that article anymore as ref)
 * an existing finding is deleted, if has no more refs
*/
export function mergeFindings(findings, existingFindings){
    const newFindings = new Set(findings)
    for(const newFinding of newFindings){
        const scannedRef = newFinding.refs[0]

        const existingFinding = existingFindings.find(ef => ef.word === newFinding.word)
        if(existingFinding){
            const sameWordSameRef = existingFinding.refs.find(r => r.url == scannedRef.url)
            if(sameWordSameRef){
                sameWordSameRef.context = scannedRef.context
            }else{
                existingFinding.refs.push(scannedRef)
            }
            newFindings.delete(newFinding)
        }
    }

    const foundWords = [...new Set(findings.map(f => f.word))]

    for(const finding of findings){
        const scannedRef = finding.refs[0]
        const existingFindingsForRef = existingFindings.filter(ef => ef.refs.map(r => r.url).includes(scannedRef.url))
        const existingFindingsNotFoundAnymore = existingFindingsForRef.filter(ef => !foundWords.includes(ef.word))
        existingFindingsNotFoundAnymore.forEach(ea => ea.refs = ea.refs.filter(r => r.url !== scannedRef.url))
    }
    //existingFindings = existingFindings.filter(ef => ef.refs.length > 0)
            
    existingFindings.push(...(newFindings.values()))
    return existingFindings
}