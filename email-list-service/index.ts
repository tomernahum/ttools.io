// runs on server
// moved to a new project (not done yet)

function addNewEmail() {
    // verify the captcha was passed
    // add the email to our db
    // send welcome email
    // parameters: email, tags, info(firstName,LastName)
}

function unsubscribeEmail() {
    // take in unsubscribe key (will be in unsubscribe link)
    // mark the corresponding user as unsubscribed
    //
}

function templateMarketingEmail() {
    // bottom: unsubscribe
}

function sendWelcomeEmail() {
    // send welcome email
    // it's possible we will have exceeded our limits. if so then mark the user in the db as having missed his intro email
    // might want to have a log of what emails a user has received
}
function sendMarketingEmailToAllSubscribers() {
    // make sure only sending to subscribed users (not unsubscribed)
}

function backupEmailList() {
    // get full list
    // encrypt it with symmetric key from env vars
    // email it to me at the address specified in env vars
}
