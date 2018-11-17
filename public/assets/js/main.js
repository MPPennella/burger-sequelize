$("document").ready(function() {

    // Listener for new burger form submission
    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        // Gather data from form
        let burgerData = {
            name: $("#newBurgerName").val().trim(),
            devoured: $("[name=eaten]:checked").val()
        }
        console.log(burgerData)

        // Submit POST request with data
        $.post("api/burgers", burgerData)
        .then( function() {
            location.reload()
        })
    })

    $(".devourBtn").on("click", function () {
        // Get id from button data
        let id = $(this).data("id")

        // Send PUT request to 'devour' selected id
        $.ajax(`api/burgers/devour/${id}`, {
            type: "PUT"
        }).then( function () {
            location.reload()
        })

    })
})