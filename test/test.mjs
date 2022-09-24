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
})