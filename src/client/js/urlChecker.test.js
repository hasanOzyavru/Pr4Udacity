import {
    checkForUrl
} from './urlChecker';

test('Not a valid url', () => {
    expect(checkForUrl('My name is Hasan')).toBeFalsy()
})

test('Is a valid url', () => {
    expect(checkForUrl('https://www.google.com')).toBeTruthy()
})