Accounts.onCreateUser((options, user) => {
    user.roles = 'default'
    return user;
})