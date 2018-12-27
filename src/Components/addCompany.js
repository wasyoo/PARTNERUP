import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react'
import Axios from 'axios'
import {getJwt} from '../helpers'

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

export class AddCompany extends Component {

    constructor() {
        super()
        this.state = {
            selectedFile: null,
            loaded: 0,
        }
      }   
      
      handleselectedFile = event => {
        this.setState({
          selectedFile: event.target.files[0],
          loaded: 0,
        })
      }
    
    newCompany=(e)=>{
        e.preventDefault()

        const tags = []
        const tagsSelector = e.target.querySelectorAll('#tags a');
        for (let i=0; i < tagsSelector.length ; i++){
        tags.push(tagsSelector[i].innerText)
        }

        const filename = Date.now()+"."+this.state.selectedFile.name.split('.').pop()

        const data = new FormData()
        data.append('file', this.state.selectedFile, filename)
        data.append('name', e.target.name.value)
        data.append('email', e.target.email.value)
        data.append('address', e.target.address.value)
        data.append('taxReference', e.target.taxReference.value)
        data.append('phone', e.target.phone.value)
        data.append('website', e.target.website.value)
        data.append('description', e.target.description.value)
        data.append('filename', filename)
        data.append('tags', tags)
        
        

        Axios.post("http://localhost:4000/company/add", data,{ headers: { Authorization: getJwt() } },{
            onUploadProgress: ProgressEvent => {
              this.setState({
                loaded: (ProgressEvent.loaded / ProgressEvent.total) * 100,
              })
            },
          })
    
        .then((res)=>{
            console.log(res.data)
            this.props.history.push('/')
        })

        .catch((err)=>{
            console.log(err)
        })
    }
    
  render() {
    return (
    <form onSubmit={this.newCompany}>
        <div className="form-group">
            <label htmlFor="name">Nom</label>
            <input
                type="text"
                className="form-control"
                id="name"
            />
        </div>
        
        <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
                type="text"
                className="form-control"
                id="email"
            />
        </div>

        <div className="form-group">
            <label htmlFor="phone">Numéro de téléphone</label>
            <input
                type="text"
                className="form-control"
                id="phone"
            />
        </div>

        <div className="form-group">
            <label htmlFor="address">Adresse</label>
            <input
                type="text"
                className="form-control"
                id="address"
            />
        </div>

        <div className="form-group">
            <label htmlFor="taxReference">Matricule fiscale</label>
            <input
                type="text"
                className="form-control"
                id="taxReference"
            />
        </div>

        <div className="form-group">
            <label htmlFor="website">Site web</label>
            <input
                type="text"
                className="form-control"
                id="website"
            />
        </div>

        <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea id="description" 
            className="form-control" 
            cols="30" 
            rows="10"></textarea>
        </div>

        <div className="form-group">
            <label htmlFor="logo">Logo</label>

            <input type="file"
            id="logo" 
            onChange={this.handleselectedFile} 
            className="form-control"
            accept="image/png, image/jpeg"/>
        </div>

        <div className="form-group">
            <label htmlFor="tags">Mots-Clés</label>
            <Dropdown name="tags" className="form-control" id="tags" placeholder='Skills' fluid multiple selection options={options} />
        </div>

    
        <button type="submit" className="btn btn-primary">
            Submit
        </button>
        <p>{this.state.loaded}</p>
    </form>
            
    )
  }
}

export default AddCompany