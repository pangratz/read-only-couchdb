function(newDoc, oldDoc, userCtx) {
    if (userCtx.roles.indexOf('_admin') !== -1) {
        return;
    } else {
        throw ({
            forbidden: 'Only admins may edit the database'
        });
    }
}