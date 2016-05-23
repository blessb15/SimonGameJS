(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Message = require('./message.js').Message;

$(document).ready(function(){
  $('#email').submit(function(event){
    event.preventDefault();
    var toField = $('#to').val();
    var messageField = $('#message').val();
    var fromField = $('#from').val();
    var newMessage = new Message(toField, fromField, messageField);
    console.log(newMessage.encode());
  });
});

},{"./message.js":2}],2:[function(require,module,exports){
exports.Message = function(to, from, messageText){
  this.to = to;
  this.from = from;
  this.messageText = messageText;
}

function reverse(s) {
  var o = '';
  for (var i = s.length - 1; i >= 0; i--)
    o += s[i];
  return o;
}

exports.Message.prototype.read = function() {
  return "Dear " + this.to + ", " + this.messageText + " Yours truly, " + this.from;
}

exports.Message.prototype.encode = function() {
  return "Dear " + reverse(this.to) + ", " + reverse(this.messageText) + " Yours truly, " + reverse(this.from);
}

},{}]},{},[1]);
