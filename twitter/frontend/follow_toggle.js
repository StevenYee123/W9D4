const followAPIUtil = require('./api_util'); 

class followToggle {
    constructor(el){
        // debugger;
        this.$el = $(el);
        this.userId = this.$el.data("user-id");
        this.followState = this.$el.data("initial-follow-state");
        this.render();
        this.$el.on("click", this.handleClick.bind(this));
    }

    render () {
        // debugger;
        if (this.followState === "unfollowed") {
            this.$el.html("Follow!"); 
            this.$el.prop("disabled", false);
        } else if (this.followState === "followed") {
            this.$el.html("Unfollow!");
            this.$el.prop("disabled", false);
        } else {
            this.$el.html("one sec...");
            this.$el.prop("disabled", true);
        }
    }

    handleClick (e) {
        e.preventDefault(); 
        
        if (this.followState === 'followed'){
            const that = this; 
            
            this.followState = "unfollowing"
            this.render();
            // debugger;
            followAPIUtil.unfollowUser(this.userId).then(() => {
                that.followState = "unfollowed";
                that.render();
            });
        } else {
            const that = this;

            this.followState = "following";
            this.render();
            // debugger;
            followAPIUtil.followUser(this.userId).then(() => {
                that.followState = "followed";
                that.render();
            });
        }

        
        // $.ajax({
        //     url: `/users/${this.userId}/follow`,
        //     method: myMethod,
        //     dataType: json, 
        //     success: () => {
        //         if (this.followState === 'followed'){
        //             this.followState = 'unfollowed';
        //         } else  {
        //             this.followState = 'followed';
        //         }
        //         this.render;
        //     }
        // })
    }
}

module.exports = followToggle; 