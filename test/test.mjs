import { mergeFindings } from '../src/spelljack.mjs'

import * as assert from 'assert'

describe('merge findings', () => {

    describe('no existing', () => {
        it('should return new findings', () => {
            const existingFindings = []
            const latestFindings = [{ word: '', refs: [{ url: '' }] }]

            const merged = mergeFindings(latestFindings, existingFindings)

            assert.deepEqual(merged, latestFindings)
        })
    })

    describe('no new', () => {
        it('should return existing', () => {
            const existingFindings = [{ word: '', refs: [{ url: '' }] }]
            const latestFindings = []

            const merged = mergeFindings(latestFindings, existingFindings)

            assert.deepEqual(merged, existingFindings)
        })
    })

    describe('new', () => {
        describe('without matching existing word', () => {
            it('should return existing plus new', () => {
                const existingFindings = [{ word: 'a', refs: [{ url: '1' }] }]
                const latestFindings = [{ word: 'b', refs: [{ url: '2' }] }]

                const merged = mergeFindings(latestFindings, existingFindings)

                assert.deepEqual(merged, [{ word: 'a', refs: [{ url: '1' }] }, { word: 'b', refs: [{ url: '2' }] }])
            })
        })
        describe('for existing word', () => {
            describe('different ref', () => {
                it('should return merge by word', () => {
                    const existingFindings = [{ word: 'b', refs: [{ url: '1' }] }]
                    const latestFindings = [{ word: 'b', refs: [{ url: '2' }] }]

                    const merged = mergeFindings(latestFindings, existingFindings)

                    assert.deepEqual(merged, [{ word: 'b', refs: [{ url: '1' }, { url: '2' }] }])
                })
            })
            describe('same ref', () => {
                it('should return merge by word, no duplicate ref', () => {
                    const existingFindings = [{ word: 'b', refs: [{ url: '1' }] }]
                    const latestFindings = [{ word: 'b', refs: [{ url: '1', context: 'abc' }] }]

                    const merged = mergeFindings(latestFindings, existingFindings)

                    assert.deepEqual(merged, [{ word: 'b', refs: [{ context: 'abc', url: '1' }] }])
                })
            })
        })
        describe('for existing with multiple refs', () => {
            describe('different word', () => {
                it('should return existing (with removed unfound ref) plus new', () => {
                    const existingFindings = [{ word: 'aa', refs: [{ url: '1' }, { url: '2' }] }]
                    const latestFindings = [{ word: 'a', refs: [{ url: '1' }] }]

                    const merged = mergeFindings(latestFindings, existingFindings)

                    assert.deepEqual(merged, [{ word: 'aa', refs: [{ url: '2' }] }, { word: 'a', refs: [{ url: '1' }] }])
                })
            })
        })
        describe('for existing with single ref', () => {
            describe('different word', () => {
                it('should return existing (with removed unfound ref => empty refs) plus new', () => {
                    const existingFindings = [{ word: 'aa', refs: [{url: '1', context: "...aa" }] }]
                    const latestFindings = [{ word: 'a', refs: [{url: '1', context: "...a" }] }]

                    const merged = mergeFindings(latestFindings, existingFindings)

                    assert.deepEqual(merged, [{ word: 'aa', refs: [] }, { word: 'a', refs: [{url: '1', context: "...a" }] }])
                })
            })
        })
    })
})