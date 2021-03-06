import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import Axios from 'axios'

const options = [
    { key: 'angular', text: 'Angular', value: 'angular' },
    { key: 'css', text: 'CSS', value: 'css' },
    { key: 'design', text: 'Graphic Design', value: 'design' },
    { key: 'ember', text: 'Ember', value: 'ember' },
    { key: 'html', text: 'HTML', value: 'html' },
    { key: 'ia', text: 'Information Architecture', value: 'ia' },
    { key: 'javascript', text: 'Javascript', value: 'javascript' },
    { key: 'mech', text: 'Mechanical Engineering', value: 'mech' },
    { key: 'meteor', text: 'Meteor', value: 'meteor' },
    { key: 'node', text: 'NodeJS', value: 'node' },
    { key: 'plumbing', text: 'Plumbing', value: 'plumbing' },
    { key: 'python', text: 'Python', value: 'python' },
    { key: 'rails', text: 'Rails', value: 'rails' },
    { key: 'react', text: 'React', value: 'react' },
    { key: 'repair', text: 'Kitchen Repair', value: 'repair' },
    { key: 'ruby', text: 'Ruby', value: 'ruby' },
    { key: 'ui', text: 'UI Design', value: 'ui' },
    { key: 'ux', text: 'User Experience', value: 'ux' },
  ]
  const addNeeds = (e)=>{
    e.preventDefault()
    const tags = []
    const tagsSelector = e.target.querySelectorAll('#tags a');
    for (let i=0; i < tagsSelector.length ; i++){
      tags.push(tagsSelector[i].innerText)
    }

    const NewNeeds = {
        title : e.target.title.value,
        content : e.target.description.value,
        date:new Date(),
        tags : tags
    }

    Axios.post("http://localhost:4000/new_needs", NewNeeds)
    .then((res)=>{
        console.log(res.data)
    })
    .catch((err)=>{
        console.log(err)
    })

  }

const ProposeForm = () =>{
    
    return (
        <form onSubmit={addNeeds}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
          />
        </div>
        <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea 
                className="form-control"
                id="description"
                name="description" 
                rows="5">
            </textarea>
        </div>

        <Dropdown name="tags" id="tags" placeholder='Skills' fluid multiple selection options={options} />

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    )
}

export default ProposeForm;