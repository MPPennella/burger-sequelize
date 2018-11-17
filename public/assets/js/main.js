$("document").ready(function() {

    // Listener for new burger form submission
    $(".create-form").on("submit", function (event) {
        event.preventDefault();
    })

    $(".devourBtn").on("click", function () {
        // Get id from button data
        let id = $(this).data("id")
        console.log(id)

        // Send PUT request to 'devour' selected id
        
    })
})