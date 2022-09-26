import { mergeFindings } from '../src/spelljack.mjs'

import * as assert from 'assert'

describe('merge findings', () => {

    describe('no existing', () => {
        it('should return new findings', () => {
            const existingFindings = []
            const newFindings = [{ word: '', refs: [''] }]

            const merged = mergeFindings(newFindings, existingFindings)

            assert.deepEqual(merged, newFindings)
        })
    })

    describe('no new', () => {
        it('should return existing', () => {
            const existingFindings = [{ word: '', refs: [''] }]
            const newFindings = []

            const merged = mergeFindings(newFindings, existingFindings)

            assert.deepEqual(merged, existingFindings)
        })
    })

    describe('new', () => {
        describe('without matching existing word', () => {
            it('should return existing plus new', () => {
                const existingFindings = [{ word: 'a', refs: ['1'] }]
                const newFindings = [{ word: 'b', refs: ['2'] }]

                const merged = mergeFindings(newFindings, existingFindings)

                assert.deepEqual(merged, [{ word: 'a', refs: ['1'] }, { word: 'b', refs: ['2'] }])
            })
        })
        describe('for existing word', () => {
            describe('different ref', () => {
                it('should return merge by word', () => {
                    const existingFindings = [{ word: 'b', refs: ['1'] }]
                    const newFindings = [{ word: 'b', refs: ['2'] }]

                    const merged = mergeFindings(newFindings, existingFindings)

                    assert.deepEqual(merged, [{ word: 'b', refs: ['1', '2'] }])
                })
            })
            describe('same ref', () => {
                it('should return merge by word, no duplicate ref', () => {
                    const existingFindings = [{ word: 'b', refs: ['1'] }]
                    const newFindings = [{ word: 'b', refs: ['1'] }]

                    const merged = mergeFindings(newFindings, existingFindings)

                    assert.deepEqual(merged, [{ word: 'b', refs: ['1'] }])
                })
            })
        })
        describe('for existing with multiple refs', () => {
            describe('different word', () => {
                it('should return existing (with removed unfound ref) plus new', () => {
                    const existingFindings = [{ word: 'aa', refs: ['1', '2'] }]
                    const newFindings = [{ word: 'a', refs: ['1'] }]

                    const merged = mergeFindings(newFindings, existingFindings)

                    assert.deepEqual(merged, [{ word: 'aa', refs: ['2'] }, { word: 'a', refs: ['1'] }])
                })
            })
        })
        describe('for existing with single ref', () => {
            describe('different word', () => {
                it('should return only new', () => {
                    const existingFindings = [{ word: 'aa', refs: ['1'] }]
                    const newFindings = [{ word: 'a', refs: ['1'] }]

                    const merged = mergeFindings(newFindings, existingFindings)

                    assert.deepEqual(merged, [{ word: 'a', refs: ['1'] }])
                })
            })
        })
    })
})