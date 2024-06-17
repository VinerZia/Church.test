$(document).ready(() => {
    $('.login-form').on('submit', function (e) {
      e.preventDefault();
      $.ajax({
        type: "POST",
        dataType: "json", // Expecting JSON response from the server
        timeout: 500,
        url: '/src/login.php',
        data: $(this).serialize(),
        success: (data) => {
          console.log('Success:', data); // Data is already parsed as JSON
        },
        error: (jqXHR, textStatus, errorThrown) => {
          if (textStatus === 'parsererror') {
            // Handle case when expected JSON response is not received
            console.error('Parser error: The response is not valid JSON');
          } else {
            // Handle other AJAX errors (timeout, server error, etc.)
            console.error('AJAX error:', textStatus, errorThrown);
          }
        }
      });
    });
  });
  