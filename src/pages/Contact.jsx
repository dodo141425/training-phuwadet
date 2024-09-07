import React from 'react'
import Layout from '../components/Layout';

const Contact = () => {
  return (
    <Layout>
      <h1 className="font-bold text-4xl text-blue-950 mb-2 text-center">ติดต่อเรา</h1>
      <hr />

      <div className="flex items-center justify-center mt-10">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">NVC Training Center</h2>
        <form>
          <div className="mb-4">
          <h4 className="text-1xl font-bold mb-6 text-gray-800">Address</h4>
          <hr />
            <p>80 Tesa Rd., Mueang, Nakhon Pathom, </p>
          </div>
          
          <div className="mb-4">
          <h4 className="text-1xl font-bold mb-6 text-gray-800">Tel.</h4>
          <hr />
          <p>099-9999999</p>
            
          </div>
          <div className="mb-4">
          <h4 className="text-1xl font-bold mb-6 text-gray-800">Email</h4>
          <hr />
          <p>admin@nvctrainingcenter.com</p>
            
          </div>
          <div className="flex justify-center">
            
          </div>
        </form>
      </div>
    </div>

    </Layout>
  )
}

export default Contact