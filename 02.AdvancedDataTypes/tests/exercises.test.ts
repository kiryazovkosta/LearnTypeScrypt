import { describe, it, expect } from 'vitest'
import * as exercises from '../src/exercises'
import { optionalMultiplier } from '../src/optional-multiplier'
import { operator } from '../src/operator'
import { getHttpResponse } from '../src/http-codes'

describe('add()', () => {
    it('adds two numbers', () => {
        expect(exercises.add(1, 2)).toBe(3)
    })
})


describe('1. Optional Multiplier', () => {
    it('When there are string numbers as input arguments should returns multiplication', () => {
        expect(optionalMultiplier('3', '5', '10')).toBe(150)
    })

    it('When there are mixed numbers as input arguments should returns multiplication', () => {
        expect(optionalMultiplier('3', 5, '10')).toBe(150)
    })

    it('When there are mixed numbers as input arguments should returns multiplication', () => {
        expect(optionalMultiplier('2','2')).toBe(4)
    })

    it('When there are mixed numbers as input arguments should returns multiplication', () => {
        expect(optionalMultiplier(undefined, 2, 3)).toBe(6)
    })

    it('When there are mixed numbers as input arguments should returns multiplication', () => {
        expect(optionalMultiplier(7, undefined, '2')).toBe(14)
    })

    it('When there are mixed numbers as input arguments should returns multiplication', () => {
        expect(optionalMultiplier(undefined, undefined, 5)).toBe(5)
    })
    
    it('When there are no input arguments should returns one', () => {
        expect(optionalMultiplier()).toBe(1)
    })
})

describe('2. Operator', () => {
    it('Test case 1', () => {
        expect(operator(['First', 'Second', 'Third'], 'Index', 1)).toBe("Second")
    })

    it('Test case 2', () => {
        expect(operator('string', 'Index', 1)).toBe("t")
    })

    it('Test case 3', () => {
        expect(operator(['Just', 'Two'], 'Length', 5)).toBe(2)
    })

    it('Test case 4', () => {
        expect(operator('short string1', 'Length', 5)).toBe(3)
    })

    it('Test case 5', () => {
        expect(operator('7', 'Add', 3)).toBe(10)
    })

    it('Test case 6', () => {
        expect(operator(11, 'Add', 3)).toBe(14)
    })
})

describe('4. Http Codes', () => {
    it('Test case 1', () => {
        expect(getHttpResponse({ code: 200, text: 'OK'})).toBe("OK")
    })

    it('Test case 2', () => {
        expect(getHttpResponse({ code: 201, text: 'Created'})).toBe("Created")
    })

    it('Test case 3', () => {
        const result = getHttpResponse({ code: 400, text: 'Bad Request', printChars: 4});
        expect(result).toBe("Bad ")
    })

    it('Test case 4', () => {
        expect(getHttpResponse({ code: 404, text: 'Not Found'})).toBe("Not Found")
    })

    it('Test case 5', () => {
        expect(getHttpResponse({ code: 404, text: 'Not Found', printChars: 3})).toBe("Not")
    })

    it('Test case 6', () => {
        expect(getHttpResponse({ code: 500, text: 'Internal Server Error', printChars: 1})).toBe("I")
    })
})