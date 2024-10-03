const delayedSuccess = () => {
    setTimeout(() => {
        let success = { 'message': 'delayed success!' };
        console.log(success);
    }, 500);
};

const delayedException = () => {
    setTimeout(() => {
        try {
            throw new Error('error: delayed exception!');
        } catch (e) {
            console.error(e);
        }
    }, 500);
};

// method called resolvedPromise
const resolvedPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            let success = { 'message': 'promise resolved success!' };
            resolve(success);
        }, 500);
    });
};

// method called rejectedPromise
const rejectedPromise = () => {
    return new Promise((_, reject) => {
        setTimeout(() => {
            let error = new Error('error: promise rejected!');
            reject(error);
        }, 500);
    });
};


delayedSuccess();
delayedException();

// shows the output
resolvedPromise()
    .then(result => console.log(result))  // { message: 'promise resolved success!' }
    .catch(error => console.error(error));

rejectedPromise()
    .then(result => console.log(result))
    .catch(error => console.error(error));  // error: promise rejected!