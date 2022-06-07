import React from 'react';

const Blogs = () => {
    return (
        <div className='w-75 mx-auto'>
            <h1 style={{ 'margin': '20px 0px', 'color': '#86c232' }}>Frequently Asked Question</h1>
            <h2>1) Difference between authorization and authentication</h2>
            <p>Simply put, authentication is the method of verifying who a person is, while authorization is the method of verifying what particular applications, files, and information a person has get right of entry to to. The state of affairs is like that of an airline that wishes to decide which human beings can come on board.</p>

            <h2>2) Why are you using firebase? What other options do you have to implement authentication?</h2>
            <p>Firebase Authentication affords backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate customers in your app. It helps authentication the use of passwords, telecellsmartphone numbers, famous federated identification companies like Google, Facebook and Twitter, and more.</p>



            <h2>3) What other services does firebase provide other than authentication</h2>
            <p>
                There are many services which Firebase provides, Most useful of them are:

                Cloud Firestore
                Cloud Functions
                Authentication
                Hosting
                Cloud Storage
                Google Analytics
                Predictions
                Cloud Messaging
                Dynamic Links
                Remote Config
            </p>

        </div>
    );
};

export default Blogs;