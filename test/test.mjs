import { mergeFindings } from '../src/spelljack.mjs'

import * as assert from 'assert'

describe('merge findings', () => {

    describe('no existing', () => {
        it('should return new findings', () => {
            const existingFindings = []
            const newFindings = [{ word: '', refs: [{ url: '' }] }]

            const merged = mergeFindings(newFindings, existingFindings)

            assert.deepEqual(merged, newFindings)
        })
    })

    describe('no new', () => {
        it('should return existing', () => {
            const existingFindings = [{ word: '', refs: [{ url: '' }] }]
            const newFindings = []

            const merged = mergeFindings(newFindings, existingFindings)

            assert.deepEqual(merged, existingFindings)
        })
    })

    describe('new', () => {
        describe('without matching existing word', () => {
            it('should return existing plus new', () => {
                const existingFindings = [{ word: 'a', refs: [{ url: '1' }] }]
                const newFindings = [{ word: 'b', refs: [{ url: '2' }] }]

                const merged = mergeFindings(newFindings, existingFindings)

                assert.deepEqual(merged, [{ word: 'a', refs: [{ url: '1' }] }, { word: 'b', refs: [{ url: '2' }] }])
            })
        })
        describe('for existing word', () => {
            describe('different ref', () => {
                it('should return merge by word', () => {
                    const existingFindings = [{ word: 'b', refs: [{ url: '1' }] }]
                    const newFindings = [{ word: 'b', refs: [{ url: '2' }] }]

                    const merged = mergeFindings(newFindings, existingFindings)

                    assert.deepEqual(merged, [{ word: 'b', refs: [{ url: '1' }, { url: '2' }] }])
                })
            })
            describe('same ref', () => {
                it('should return merge by word, no duplicate ref', () => {
                    const existingFindings = [{ word: 'b', refs: [{ url: '1' }] }]
                    const newFindings = [{ word: 'b', refs: [{ url: '1', context: 'abc' }] }]

                    const merged = mergeFindings(newFindings, existingFindings)

                    assert.deepEqual(merged, [{ word: 'b', refs: [{ context: 'abc', url: '1' }] }])
                })
            })
        })
        describe('for existing with multiple refs', () => {
            describe('different word', () => {
                it('should return existing (with removed unfound ref) plus new', () => {
                    const existingFindings = [{ word: 'aa', refs: [{ url: '1' }, { url: '2' }] }]
                    const newFindings = [{ word: 'a', refs: [{ url: '1' }] }]

                    const merged = mergeFindings(newFindings, existingFindings)

                    assert.deepEqual(merged, [{ word: 'aa', refs: [{ url: '2' }] }, { word: 'a', refs: [{ url: '1' }] }])
                })
            })
        })
        describe('for existing with single ref', () => {
            describe('different word', () => {
                it('should return existing (with removed unfound ref => empty refs) plus new', () => {
                    const existingFindings = [{ word: 'aa', refs: [{url: '1' }] }]
                    const newFindings = [{ word: 'a', refs: [{url: '1' }] }]

                    const merged = mergeFindings(newFindings, existingFindings)

                    assert.deepEqual(merged, [{ word: 'aa', refs: [] }, { word: 'a', refs: [{url: '1' }] }])
                })
            })
        })
    })
})