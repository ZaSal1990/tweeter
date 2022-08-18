/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(() => {
  loadTweets(); //loads existing conten
  $('form').submit((event) => {
    event.preventDefault(); //prevents sul page refresh
    let tweet = $('textarea').val(); //accessing form input upon succession
    if (tweet && tweet.length < 140) {
      $('.new-tweet-error').slideUp(); //ensuring error is not visibile
      const serializedData = $(event.target).serialize();
      $.post('/tweets', serializedData).done(() => loadTweets()); //empties container and re-loads with newly added data only after success - anonoymous callback to ensure success
      $('textarea').val(''); //clearing textarea after successful submission
      $('.counter').text(140); //resetting counter
    } else if (tweet === "" || tweet === null || tweet === undefined) { //data handling
      let errorMessage = '* Cannot post empty tweet';
      $('.new-tweet-error').html(errorMessage);
      $('.new-tweet-error').slideDown();
    } else if (tweet.length > 140) {
      let errorMessage = '* Tweet is exceeding maximum character limit!';
      $('.new-tweet-error').html(errorMessage);
      $('.new-tweet-error').slideDown();
    }
  });
});

const safeHtml = function (str) { //fns to protect aginst XSS injection - threat -- ask mentor to explain working
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

const loadTweets = function() {
  $.ajax({
    url: '/tweets',
    method: 'GET',
    dataType: 'json',
    success: (tweets) => {
      $('.tweet-container').empty();
      renderTweets(tweets);
    },
    error: (err) => {
      console.log(`error: ${err}`);
    }
  });
};
 
const createTweetElement = function(tweet) {
  const article = $(`<article><header><div class="header-user"><img src=${tweet.user.avatars}><h5 class="user">${tweet.user.name}</h5></div><div class="header-replyingTo">${tweet.user.handle}</div></header><p class="tweet-data">${safeHtml(tweet.content.text)}</p><footer class="tweet-container-footer"><div class="footer-time"><p>${timeago.format(tweet.created_at)}</p></div><div class="footer-icon"><i class="fa-solid fa-flag fa-xs"></i>
  <i class="fa-solid fa-retweet fa-xs"></i><i class="fa-solid fa-heart fa-xs"></i></div></footer></article>`);
  return $('.tweet-container').prepend(article);
};

const renderTweets = function(tweetDatabase) {
  for (let tweet of tweetDatabase) {
    createTweetElement(tweet);
  }
};
