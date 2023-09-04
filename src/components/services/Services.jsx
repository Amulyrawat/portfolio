import React from 'react'
import './Services.css'
import {BsCheck} from 'react-icons/bs'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className='service__head'>
            <h3>Tools</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsCheck className='service__list-icon'/>
              <div>
                <h4>Gitlab</h4>
                <p>It is a DevOps software package that combines the ability to develop, secure, and operate software in a single application.</p>
              </div>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <div>
                <h4>Kibana</h4>
                <p>It is a source-available data visualization dashboard software for Elasticsearch, whose free and open source successor in OpenSearch is OpenSearch Dashboards.</p>
              </div>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <div>
                <h4>Jira</h4>
                <p>It is a proprietary issue tracking product developed by Atlassian that allows bug tracking and agile project management.</p>
              </div>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <div>
                <h4>Confluence</h4>
                <p>It is a web-based corporate wiki developed by Australian software company Atlassian.</p>
              </div>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className='service__head'>
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
      </div>

    </section>
  )
}

export default Services
