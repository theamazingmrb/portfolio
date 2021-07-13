import React, { useState } from 'react'
import { withAuthenticator } from '@aws-amplify/ui-react'
import { API, Storage } from 'aws-amplify'
import { createPost } from '../src/graphql/mutations'
import config from '../src/aws-exports'

const CreatePost = () => {
const [data, setData] = useState('')

const handleChange = e => {
    if (e.target.id == 'image') {
        setData({...data, [e.target.id] : e.target.files[0]})
        return
    }
    setData({...data, [e.target.id] : e.target.value})
}

const handleSubmit = async e => {
    e.preventDefault()
    const uploadImage = await Storage.put(data.image.name, data.image)
    const newPost = await API.graphql({
        query: createPost,
        variables: {
            input: {
                name,
                image: {
                    region: config.aws_user_files_s3_bucket_region,
                    bucket: config.aws_user_files_s3_bucket,
                    key: uploadImage.key
                }
            }
        }
    })

    console.log(newPost)
}
    return (
        <div>
            <h1>Upload an Image</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Title</label>
                <input onChange={handleChange} type="text" id="name" />
                <label htmlFor="image">Image</label>
                <input  onChange={handleChange} type="file" id="image" />
                <input type='submit' value="create" />
            </form>
        </div>
    )
}

export default withAuthenticator(CreatePost)
