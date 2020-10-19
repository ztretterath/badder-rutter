import { mount } from '@vue/test-utils'
import App from '../src/App.vue'
import Post from '../src/components/Post.vue'
import NewPost from '../src/components/NewPost.vue'

describe('App', () => {
    // Inspect the raw component options
    it('has data', () => {
        expect(typeof App.data).toBe('function')
    })
})

describe('Post', () => {
    // Inspect the raw component options
    it('has data', () => {
        expect(typeof Post.data).toBe('function')
    })
})

describe('NewPost', () => {
    // Inspect the raw component options
    it('has data', () => {
        expect(typeof NewPost.data).toBe('function')
    })
})