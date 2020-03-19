const APIUtil = {
    followUser: (id) => {
        // debugger;
        return $.ajax({
            url: `/users/${id}/follow`,
            method: "POST",
            dataType: "json"
        });
    },

    unfollowUser: (id) => {
        // debugger;
        return $.ajax({
            method: "DELETE",
            url: `/users/${id}/follow`,
            dataType: "json" 
        });
    }
}

module.exports = APIUtil; 