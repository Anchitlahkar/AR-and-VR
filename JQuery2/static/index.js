$(document).ready(function () {
  getStory();
});

function getStory(){
    $.ajax({
        url: "/get-story",
        type: "get",
        success: function (result) {
            displayStory(result.story)
        },
        error: function (result) {
            alert(result.responseJSON.message)
        }
    })
}

$(function () {
  $(".input_field").keyup(function () {
    let id = $(this).attr("id");
    let input_number = id.split("_")[1];
    $(".rep_input").eq(input_number).html($(this).val());
  });

  $("#submit_story").click(function () {
    let values = [];

    for (let i = 0; i < $(".input_field").length; i++) {
      values.push($(".input_field").eq(i).val());
    }

    let data = {
      story_id: $("#story_id").val(),
      values: values,
    };

    /*
      $.ajax({
        name:value,
        name:value,
        ….
        ….
        })

        ● url: URL of the page where we want to send the request;
        ● type: type of the request, GET or POST;

        ● data: actual data that needs to be sent to the server;
        ● dataType: datatype of the response;
        ● contentType: type of the content used while sending a request to the server;
        ● success: a function after the request is successful; and
        ● error: a function after the request fails.

      */

    $.ajax({
      url: "/post-answers",
      type: "post",
      data: JSON.stringify(data),
      dataType: "json",
      contentType: "application/json",
      success: function (result) {
        $("#result").html(result.result);
        $("#result_container").removeClass("hidden");
      },
      error: function (result) {
        alert(result.responseJSON.message);
      },
    });
  });
});

function displayStory(story) {
  //const story = stories[Math.floor(Math.random() * stories.length)];
  $("#story_title").html(story.title);

  $("#bank_words").empty();

  for (let i = 0; i < story.words.length; i++) {
    let html = `<button class="word_bank_button">${story.words[i]}</button>`;
    $("#bank_words").append(html);
  }

  $("#input_fields").empty();
  for (let i = 0; i < story.inputs; i++) {
    let input_html = `<input type="text" class="input_field" id="input_${i}" placeholder="Input ${
      i + 1
    }"/>`;
    $("#input_fields").append(input_html);
  }

  $("#story_text").html(story.story);

  $("#story_id").val(story.story_id);
}
