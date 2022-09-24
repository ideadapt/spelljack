
/**
 * add finding-url to existing finding if same word
 * remove all existing finding refs not present in findings
*/
export function mergeFindings(findings, existingFindings){
    const newFindings = new Set(findings)
    for(const newFinding of newFindings){
        const scannedRef = newFinding.refs[0]

        const existing = existingFindings.find(ef => ef.word === newFinding.word)
        if(existing){
            // TODO use Set
            existing.refs.push(scannedRef)
            existing.refs = [...new Set(existing.refs)]
            newFindings.delete(newFinding)
        }
    }

    // TODO still full of bugs => unit test with mocha
    // remove existingFinding if: existingFindingsForUrl not in newFindings
   
            
    existingFindings.push(...(newFindings.values()))
    existingFindings.sort((a, b) => a.word.localeCompare(b.word))
    return existingFindings
}