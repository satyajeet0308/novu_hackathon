const { Novu } = require('@novu/node');

exports.notificationSend = (req, res) => {
   
    var { name, email, number, account, amount } = req.body

    const novu = new Novu('4e537f68975d82216dfa2bc652236a43');

    novu.trigger('novuhackathon', {
        to: {
            subscriberId: new Date(),
            email: email
        },
        payload: {
            Customer_name: name,
            amount: amount,
            account_number: account
        }
    }).then(response => {
        console.log(response.data);
        res.status(200).json({
            "status": 0,
            "message": "successfully sent",
            "data": response.data
        })
    }).catch(err => {
        console.log(err);

        res.status(200).json({
            "status": 1,
            "message": "error in sent",
            "error_message": err.message
        })
    });

}