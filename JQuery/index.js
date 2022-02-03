let stories = [
  {
    inputs: 8,
    title: "Let's Go to the Zoo",
    story: `Today we went to the zoo! The first thing we saw was a <span class="rep_input">_____</span> <span class="rep_input">_____</span> <span class="rep_input">_____</span>. The zookeeper told us that was normal, except in <span class="rep_input">_____</span>. I had a <span class="rep_input">_____</span> time! Next time, I will remember that if I ever see <span class="rep_input">_____</span> <span class="rep_input">_____</span>, I should <span class="rep_input">_____</span> the other way.`,
    words: [
      "Black",
      "Gorilla",
      "Dancing",
      "Madagascar",
      "Nice",
      "White",
      "Tigers",
      "Move",
    ],
  },
  {
    inputs: 7,
    title: "Picnic Time",
    story: `On <span class="rep_input">_____</span> we are going on a picnic! I'm going with my <span class="rep_input">_____</span> and my favourite pet <span class="rep_input">_____</span>. For lunch, we will eat <span class="rep_input">_____</span> and drink <span class="rep_input">_____</span>. We will end the day with a <span class="rep_input">_____</span> game of <span class="rep_input">_____</span>.`,
    words: ["Sunday", "Aunt", "Dog", "Burgers", "Soft Drinks", "Nice", "Cards"],
  },
  {
    inputs: 12,
    title: "Silly Animal Tale",
    story: `There once was a <span class="rep_input">_____</span> <span class="rep_input">_____</span> from <span class="rep_input">_____</span>. Nobody knew he was a <span class="rep_input">_____</span> because he had <span class="rep_input">_____</span> fur and ate <span class="rep_input">_____</span> <span class="rep_input">_____</span> each day. He liked to <span class="rep_input">_____</span> and sing <span class="rep_input">_____</span>. Whenever he was <span class="rep_input">_____</span>, he would start speaking <span class="rep_input">_____</span>. Then he would feel <span class="rep_input">_____</span>.`,
    words: [
      "Smelly",
      "Cat",
      "California",
      "Cat",
      "Blue",
      "3",
      "Fishes",
      "Dance",
      "Songs",
      "Sad",
      "Childishly",
      "Happy",
    ],
  },
];
/* 





	REPLACE COMMENTS WITH jQuery CODE HERE!

        $(selector).action()
        $: The dollar symbol denotes the beginning of a jQuery function
        selector: It is the id, tag name, class name of the HTML element that we want to select.
        action: It is a jQuery action that can be performed on the selected element, like, setting an attribute or hiding an element.

        $(document).ready(function(){

        })

        $(function(){

        })


*/

$(document).ready(function () {
  displayStory();
});

function displayStory() {
  //Get random story
  const story = stories[Math.floor(Math.random() * stories.length)];

  //Get the story title
  $("#story_title").html(story.title);
  //Get the story content
  $("#story_text").html(story.story);

  //Make sure the input blanks(dashes) are empty when the story loads
  $("#input_fields").empty();

  //Set input boxes
  for (var i = 0; i < story.inputs; i++) {
    let input_html = `<input type="text" class="input_field" id="input_${i}" placeholder="Input ${
      i + 1
    }"/>`;

    $("#input_fields").append(input_html);
  }

  $("#bank_words").empty();
  for (let i = 0; i < story.words.length; i++) {
      let html = `<button class="word_bank_button">${story.words[i]}</button>`
      $("#bank_words").append(html)
  }
  
  
}
