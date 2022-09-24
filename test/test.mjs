import {mergeFindings} from '../src/module.mjs'

import * as assert from 'assert'

describe('merge findings', () => {

  describe('no existing', () => {
    it('should return new findings', () => {
      const newFindings = [{ word: '', refs: [''] }]
      const existingFindings = []

      const merged = mergeFindings(newFindings, existingFindings)

      assert.deepEqual(merged, newFindings)
    })
  })

  describe('no new', () => {
    it('should return existing', () => {
      const newFindings = []
      const existingFindings = [{ word: '', refs: [''] }]

      const merged = mergeFindings(newFindings, existingFindings)
      
      assert.deepEqual(merged, existingFindings)
    })
  })

  describe('new', () => {
    describe('without matching existing word', () => {
        it('should return existing plus new', () => {
          const newFindings = [{ word: 'b', refs: ['2'] }]
          const existingFindings = [{ word: 'a', refs: ['1'] }]
    
          const merged = mergeFindings(newFindings, existingFindings)
          
          assert.deepEqual(merged, [{ word: 'a', refs: ['1'] }, { word: 'b', refs: ['2'] }])
        })
    })
    describe('for existing word', () => {
        describe('different ref', () => {
            it('should return merge by word', () => {
                const newFindings = [{ word: 'b', refs: ['2'] }]
                const existingFindings = [{ word: 'b', refs: ['1'] }]
          
                const merged = mergeFindings(newFindings, existingFindings)
                
                assert.deepEqual(merged, [{ word: 'b', refs: ['1', '2'] }])
              })
        })
        describe('same ref', () => {
            it('should return merge by word, no duplicate ref', () => {
            const newFindings = [{ word: 'b', refs: ['1'] }]
            const existingFindings = [{ word: 'b', refs: ['1'] }]
        
            const merged = mergeFindings(newFindings, existingFindings)
            
            assert.deepEqual(merged, [{ word: 'b', refs: ['1'] }])
            })
        })
    })
    describe('for existing ref', () => {
        describe('different word', () => {
            it('should return existing plus new', () => {
            const newFindings = [{ word: 'a', refs: ['1'] }]
            const existingFindings = [{ word: 'aa', refs: ['1'] }]
        
            const merged = mergeFindings(newFindings, existingFindings)
            
            assert.deepEqual(merged, [{ word: 'a', refs: ['1'] }, { word: 'aa', refs: ['1'] }])
            })
        })
    })
  })
})