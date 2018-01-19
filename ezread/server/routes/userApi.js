/**
 * Created by nikhi on 7/31/2017.
 */

var phonicList = require('../models/phonicSchema')
var mongoose = require('mongoose');
var fs = require('fs');
module.exports = function (app, express) {
  var api = express.Router();

  function base64_encode(imageUrl) {
    try {
      // Code to run
      var bitmap = fs.readFileSync(imageUrl);
      return new Buffer(bitmap).toString('base64');

    }

    catch (error) {
      // Code to run if an exception occurs
      return base64_encode('../../learnkids/src/assets/img/comingsoon.jpg');
    }


  }


////////////////api for json data/////////////////

  /*api.get('/mobile', function (req, res) {
   var phonicimages = [{"name": "bat", "imageUrl": "BAT.jpg", "imageData": "empty", "family": "-at"}, {
   "name": "cat",
   "imageUrl": "CAT.jpg",
   "imageData": "empty",
   "family": "-at"
   }, {"name": "hat", "imageUrl": "HAT.jpg", "imageData": "empty", "family": "-at"}, {
   "name": "fat",
   "imageUrl": "FAT.jpg",
   "imageData": "empty",
   "family": "-at"
   }, {"name": "mat", "imageUrl": "MAT.jpg", "imageData": "empty", "family": "-at"}, {
   "name": "pat",
   "imageUrl": "PAT.jpg",
   "imageData": "empty",
   "family": "-at"
   }, {"name": "sat", "imageUrl": "SAT.jpg", "imageData": "empty", "family": "-at"}, {
   "name": "rat",
   "imageUrl": "RAT.jpg",
   "imageData": "empty",
   "family": "-at"
   }, {"name": "an", "imageUrl": "AN.jpg", "imageData": "empty", "family": "-an"}, {
   "name": "can",
   "imageUrl": "CAN.jpg",
   "imageData": "empty",
   "family": "-an"
   }, {"name": "pan", "imageUrl": "PAN.jpg", "imageData": "empty", "family": "-an"}, {
   "name": "fan",
   "imageUrl": "FAN.jpg",
   "imageData": "empty",
   "family": "-an"
   }, {"name": "man", "imageUrl": "MAN.jpg", "imageData": "empty", "family": "-an"}, {
   "name": "ran",
   "imageUrl": "RAN.jpg",
   "imageData": "empty",
   "family": "-an"
   }, {"name": "van", "imageUrl": "VAN.jpg", "imageData": "empty", "family": "-an"}, {
   "name": "dan",
   "imageUrl": "DAN.jpg",
   "imageData": "empty",
   "family": "-an"
   }, {"name": "am", "imageUrl": "AM.jpg", "imageData": "empty", "family": "-am"}, {
   "name": "ham",
   "imageUrl": "HAM.jpg",
   "imageData": "empty",
   "family": "-am"
   }, {"name": "ram", "imageUrl": "RAM.jpg", "imageData": "empty", "family": "-am"}, {
   "name": "pam",
   "imageUrl": "PAM.jpg",
   "imageData": "empty",
   "family": "-am"
   }, {"name": "sam", "imageUrl": "SAM.jpg", "imageData": "empty", "family": "-am"}, {
   "name": "jam",
   "imageUrl": "JAM.jpg",
   "imageData": "empty",
   "family": "-am"
   }, {"name": "cap", "imageUrl": "CAP.jpg", "imageData": "empty", "family": "-ap"}, {
   "name": "lap",
   "imageUrl": "LAP.jpg",
   "imageData": "empty",
   "family": "-ap"
   }, {"name": "map", "imageUrl": "MAP.jpg", "imageData": "empty", "family": "-ap"}, {
   "name": "gap",
   "imageUrl": "GAP.jpg",
   "imageData": "empty",
   "family": "-ap"
   }, {"name": "nap", "imageUrl": "NAP.jpg", "imageData": "empty", "family": "-ap"}, {
   "name": "rap",
   "imageUrl": "RAP.jpg",
   "imageData": "empty",
   "family": "-ap"
   }, {"name": "clap", "imageUrl": "CLAP.jpg", "imageData": "empty", "family": "-ap"}, {
   "name": "tap",
   "imageUrl": "TAP.jpg",
   "imageData": "empty",
   "family": "-ap"
   }, {"name": "bag", "imageUrl": "BAG.jpg", "imageData": "empty", "family": "-ag"}, {
   "name": "flag",
   "imageUrl": "FLAG.jpg",
   "imageData": "empty",
   "family": "-ag"
   }, {"name": "tag", "imageUrl": "TAG.jpg", "imageData": "empty", "family": "-ag"}, {
   "name": "wag",
   "imageUrl": "WAG.jpg",
   "imageData": "empty",
   "family": "-ag"
   }, {"name": "gag", "imageUrl": "GAG.jpg", "imageData": "empty", "family": "-ag"}, {
   "name": "mag",
   "imageUrl": "MAG.jpg",
   "imageData": "empty",
   "family": "-ag"
   }, {"name": "cab", "imageUrl": "CAB.jpg", "imageData": "empty", "family": "-ab"}, {
   "name": "lab",
   "imageUrl": "LAB.jpg",
   "imageData": "empty",
   "family": "-ab"
   }, {"name": "gab", "imageUrl": "GAB.jpg", "imageData": "empty", "family": "-ab"}, {
   "name": "dab",
   "imageUrl": "DAB.jpg",
   "imageData": "empty",
   "family": "-ab"
   }, {"name": "tab", "imageUrl": "TAB.jpg", "imageData": "empty", "family": "-ab"}, {
   "name": "crab",
   "imageUrl": "CRAB.jpg",
   "imageData": "empty",
   "family": "-ab"
   }, {"name": "dad", "imageUrl": "DAD.jpg", "imageData": "empty", "family": "-ad"}, {
   "name": "bad",
   "imageUrl": "BAD.jpg",
   "imageData": "empty",
   "family": "-ad"
   }, {
   "name": "had",
   "imageUrl": "HAD.jpg",
   "imageData": "empty",
   "family": "-ad"
   }, {"name": "lad", "imageUrl": "LAD.jpg", "imageData": "empty", "family": "-ad"}, {
   "name": "sad",
   "imageUrl": "SAD.jpg",
   "imageData": "empty",
   "family": "-ad"
   }, {"name": "band", "imageUrl": "BAND.jpg", "imageData": "empty", "family": "-and"}, {
   "name": "land",
   "imageUrl": "LAND.jpg",
   "imageData": "empty",
   "family": "-and"
   }, {"name": "hand", "imageUrl": "HAND.jpg", "imageData": "empty", "family": "-and"}, {
   "name": "sand",
   "imageUrl": "SAND.jpg",
   "imageData": "empty",
   "family": "-and"
   }, {"name": "ash", "imageUrl": "ASH.jpg", "imageData": "empty", "family": "-ash"}, {
   "name": "cash",
   "imageUrl": "CASH.jpg",
   "imageData": "empty",
   "family": "-ash"
   }, {"name": "mash", "imageUrl": "MASH.jpg", "imageData": "empty", "family": "-ash"}, {
   "name": "crash",
   "imageUrl": "CRASH.jpg",
   "imageData": "empty",
   "family": "-ash"
   }, {"name": "back", "imageUrl": "BACK.jpg", "imageData": "empty", "family": "-ack"}, {
   "name": "lack",
   "imageUrl": "LACK.jpg",
   "imageData": "empty",
   "family": "-ack"
   }, {"name": "pack", "imageUrl": "PACK.jpg", "imageData": "empty", "family": "-ack"}, {
   "name": "sack",
   "imageUrl": "SACK.jpg",
   "imageData": "empty",
   "family": "-ack"
   }, {"name": "black", "imageUrl": "BLACK.jpg", "imageData": "empty", "family": "-ack"}, {
   "name": "crack",
   "imageUrl": "CRACK.jpg",
   "imageData": "empty",
   "family": "-ack"
   }, {"name": "bank", "imageUrl": "BANK.jpg", "imageData": "empty", "family": "-ank"}, {
   "name": "sank",
   "imageUrl": "SANK.jpg",
   "imageData": "empty",
   "family": "-ank"
   }, {"name": "tank", "imageUrl": "TANK.jpg", "imageData": "empty", "family": "-ank"}, {
   "name": "clank",
   "imageUrl": "CLANK.jpg",
   "imageData": "empty",
   "family": "-ank"
   }, {"name": "blank", "imageUrl": "BLANK.jpg", "imageData": "empty", "family": "-ank"}, {
   "name": "drank",
   "imageUrl": "DRANK.jpg",
   "imageData": "empty",
   "family": "-ank"
   }, {"name": "ant", "imageUrl": "ANT.jpg", "imageData": "empty", "family": "-a"}, {
   "name": "raddit",
   "imageUrl": "RADDIT.jpg",
   "imageData": "empty",
   "family": "-a"
   }, {"name": "apple", "imageUrl": "APPLE.jpg", "imageData": "empty", "family": "-a"}, {
   "name": "carrot",
   "imageUrl": "CARROT.jpg",
   "imageData": "empty",
   "family": "-a"
   }, {"name": "camel", "imageUrl": "CAMEL.jpg", "imageData": "empty", "family": "-a"}, {
   "name": "parrot",
   "imageUrl": "PARROT.jpg",
   "imageData": "empty",
   "family": "-a"
   }, {"name": "lamp", "imageUrl": "LAMP.jpg", "imageData": "empty", "family": "-a"}, {
   "name": "panda",
   "imageUrl": "PANDA.jpg",
   "imageData": "empty",
   "family": "-a"
   }, {"name": "bed", "imageUrl": "BED.jpg", "imageData": "empty", "family": "-e"}, {
   "name": "red",
   "imageUrl": "RED.jpg",
   "imageData": "empty",
   "family": "-e"
   }, {"name": "led", "imageUrl": "LED.jpg", "imageData": "empty", "family": "-e"}, {
   "name": "fed",
   "imageUrl": "FED.jpg",
   "imageData": "empty",
   "family": "-e"
   }, {"name": "ed", "imageUrl": "ED.jpg", "imageData": "empty", "family": "-e"}, {
   "name": "Ted",
   "imageUrl": "TED.jpg",
   "imageData": "empty",
   "family": "-e"
   }, {"name": "hen", "imageUrl": "HEN.jpg", "imageData": "empty", "family": "-en"}, {
   "name": "pen",
   "imageUrl": "PEN.jpg",
   "imageData": "empty",
   "family": "-en"
   }, {"name": "men", "imageUrl": "MEN.jpg", "imageData": "empty", "family": "-en"}, {
   "name": "ten",
   "imageUrl": "TEN.jpg",
   "imageData": "empty",
   "family": "-en"
   }, {"name": "den", "imageUrl": "DEN.jpg", "imageData": "empty", "family": "-en"}, {
   "name": "ben",
   "imageUrl": "BEN.jpg",
   "imageData": "empty",
   "family": "-en"
   }, {"name": "bent", "imageUrl": "BENT.jpg", "imageData": "empty", "family": "-ent"}, {
   "name": "sent",
   "imageUrl": "SENT.jpg",
   "imageData": "empty",
   "family": "-ent"
   }, {"name": "tent", "imageUrl": "TENT.jpg", "imageData": "empty", "family": "-ent"}, {
   "name": "spent",
   "imageUrl": "SPENT.jpg",
   "imageData": "empty",
   "family": "-ent"
   }, {"name": "bell", "imageUrl": "BELL.jpg", "imageData": "empty", "family": "-ell"}, {
   "name": "fell",
   "imageUrl": "FELL.jpg",
   "imageData": "empty",
   "family": "-ell"
   }, {"name": "sell", "imageUrl": "SELL.jpg", "imageData": "empty", "family": "-ell"}, {
   "name": "smell",
   "imageUrl": "SMELL.jpg",
   "imageData": "empty",
   "family": "-ell"
   }, {"name": "tell", "imageUrl": "TELL.jpg", "imageData": "empty", "family": "-ell"}, {
   "name": "spell",
   "imageUrl": "SPELL.jpg",
   "imageData": "empty",
   "family": "-ell"
   }, {"name": "best", "imageUrl": "BEST.jpg", "imageData": "empty", "family": "-est"}, {
   "name": "nest",
   "imageUrl": "NEST.jpg",
   "imageData": "empty",
   "family": "-est"
   }, {"name": "rest", "imageUrl": "REST.jpg", "imageData": "empty", "family": "-est"}, {
   "name": "test",
   "imageUrl": "TEST.jpg",
   "imageData": "empty",
   "family": "-est"
   }, {"name": "vest", "imageUrl": "VEST.jpg", "imageData": "empty", "family": "-est"}, {
   "name": "west",
   "imageUrl": "WEST.jpg",
   "imageData": "empty",
   "family": "-est"
   }, {"name": "bet", "imageUrl": "BET.jpg", "imageData": "empty", "family": "-et"}, {
   "name": "pet",
   "imageUrl": "PET.jpg",
   "imageData": "empty",
   "family": "-et"
   }, {"name": "jet", "imageUrl": "JET.jpg", "imageData": "empty", "family": "-et"}, {
   "name": "let",
   "imageUrl": "LET.jpg",
   "imageData": "empty",
   "family": "-et"
   }, {"name": "met", "imageUrl": "MET.jpg", "imageData": "empty", "family": "-et"}, {
   "name": "set",
   "imageUrl": "SET.jpg",
   "imageData": "empty",
   "family": "-et"
   }, {"name": "vet", "imageUrl": "VET.jpg", "imageData": "empty", "family": "-et"}, {
   "name": "wet",
   "imageUrl": "WET.jpg",
   "imageData": "empty",
   "family": "-et"
   }, {"name": "beg", "imageUrl": "BEG.jpg", "imageData": "empty", "family": "-eg"}, {
   "name": "leg",
   "imageUrl": "LEG.jpg",
   "imageData": "empty",
   "family": "-eg"
   }, {"name": "peg", "imageUrl": "PEG.jpg", "imageData": "empty", "family": "-eg"}, {
   "name": "keg",
   "imageUrl": "KEG.jpg",
   "imageData": "empty",
   "family": "-eg"
   }, {"name": "meg", "imageUrl": "MEG.jpg", "imageData": "empty", "family": "-eg"}, {
   "name": "greg",
   "imageUrl": "GREG.jpg",
   "imageData": "empty",
   "family": "-eg"
   }, {"name": "end", "imageUrl": "END.jpg", "imageData": "empty", "family": "-end"}, {
   "name": "send",
   "imageUrl": "SEND.jpg",
   "imageData": "empty",
   "family": "-end"
   }, {"name": "bend", "imageUrl": "BEND.jpg", "imageData": "empty", "family": "-end"}, {
   "name": "spend",
   "imageUrl": "SPEND.jpg",
   "imageData": "empty",
   "family": "-end"
   }, {"name": "blend", "imageUrl": "BLEND.jpg", "imageData": "empty", "family": "-end"}, {
   "name": "friend",
   "imageUrl": "FRIEND.jpg",
   "imageData": "empty",
   "family": "-end"
   }, {"name": "egg", "imageUrl": "EGG.jpg", "imageData": "empty", "family": "-e"}, {
   "name": "elk",
   "imageUrl": "ELK.jpg",
   "imageData": "empty",
   "family": "-e"
   }, {"name": "desk", "imageUrl": "DESK.jpg", "imageData": "empty", "family": "-e"}, {
   "name": "pencil",
   "imageUrl": "PENCIL.jpg",
   "imageData": "empty",
   "family": "-e"
   }, {"name": "dress", "imageUrl": "DRESS.jpg", "imageData": "empty", "family": "-e"}, {
   "name": "lesson",
   "imageUrl": "LESSON.jpg",
   "imageData": "empty",
   "family": "-e"
   }, {"name": "help", "imageUrl": "HELP.jpg", "imageData": "empty", "family": "-e"}, {
   "name": "kettle",
   "imageUrl": "KETTLE.jpg",
   "imageData": "empty",
   "family": "-e"
   }, {"name": "elephant", "imageUrl": "ELEPHANT.jpg", "imageData": "empty", "family": "-e"}, {
   "name": "meloan",
   "imageUrl": "MELOAN.jpg",
   "imageData": "empty",
   "family": "-e"
   }, {"name": "leamon", "imageUrl": "LEAMON.jpg", "imageData": "empty", "family": "-e"}, {
   "name": "very",
   "imageUrl": "VERY.jpg",
   "imageData": "empty",
   "family": "-e"
   }, {"name": "every", "imageUrl": "EVERY.jpg", "imageData": "empty", "family": "-e"}, {
   "name": "seven",
   "imageUrl": "SEVEN.jpg",
   "imageData": "empty",
   "family": "-e"
   }, {"name": "any", "imageUrl": "ANY.jpg", "imageData": "empty", "family": "-a"}, {
   "name": "anybody",
   "imageUrl": "ANYBODY.jpg",
   "imageData": "empty",
   "family": "-a"
   }, {"name": "anyone", "imageUrl": "ANYONE.jpg", "imageData": "empty", "family": "-a"}, {
   "name": "anything",
   "imageUrl": "ANYTHING.jpg",
   "imageData": "empty",
   "family": "-a"
   }, {"name": "anywhere", "imageUrl": "ANYWHERE.jpg", "imageData": "empty", "family": "-a"}, {
   "name": "thames",
   "imageUrl": "THAMES.jpg",
   "imageData": "empty",
   "family": "-a"
   }, {"name": "head", "imageUrl": "HEAD.jpg", "imageData": "empty", "family": "-ea"}, {
   "name": "bread",
   "imageUrl": "BREAD.jpg",
   "imageData": "empty",
   "family": "-ea"
   }, {"name": "thread", "imageUrl": "THREAD.jpg", "imageData": "empty", "family": "-ea"}, {
   "name": "ready",
   "imageUrl": "READY.jpg",
   "imageData": "empty",
   "family": "-ea"
   }, {"name": "sweater", "imageUrl": "SWEATER.jpg", "imageData": "empty", "family": "-ea"}, {
   "name": "weather",
   "imageUrl": "WEATHER.jpg",
   "imageData": "empty",
   "family": "-ea"
   }, {"name": "bin", "imageUrl": "BIN.jpg", "imageData": "empty", "family": "-in"}, {
   "name": "pin",
   "imageUrl": "PIN.jpg",
   "imageData": "empty",
   "family": "-in"
   }, {"name": "tin", "imageUrl": "TIN.jpg", "imageData": "empty", "family": "-in"}, {
   "name": "fin",
   "imageUrl": "FIN.jpg",
   "imageData": "empty",
   "family": "-in"
   }, {"name": "kin", "imageUrl": "KIN.jpg", "imageData": "empty", "family": "-in"}, {
   "name": "spin",
   "imageUrl": "SPIN.jpg",
   "imageData": "empty",
   "family": "-in"
   }, {"name": "hip", "imageUrl": "HIP.jpg", "imageData": "empty", "family": "-ip"}, {
   "name": "sip",
   "imageUrl": "SIP.jpg",
   "imageData": "empty",
   "family": "-ip"
   }, {"name": "lip", "imageUrl": "LIP.jpg", "imageData": "empty", "family": "-ip"}, {
   "name": "trip",
   "imageUrl": "TRIP.jpg",
   "imageData": "empty",
   "family": "-ip"
   }, {"name": "tip", "imageUrl": "TIP.jpg", "imageData": "empty", "family": "-ip"}, {
   "name": "ship",
   "imageUrl": "SHIP.jpg",
   "imageData": "empty",
   "family": "-ip"
   }, {"name": "bit", "imageUrl": "BIT.jpg", "imageData": "empty", "family": "-it"}, {
   "name": "hit",
   "imageUrl": "HIT.jpg",
   "imageData": "empty",
   "family": "-it"
   }, {"name": "fit", "imageUrl": "FIT.jpg", "imageData": "empty", "family": "-it"}, {
   "name": "kit",
   "imageUrl": "KIT.jpg",
   "imageData": "empty",
   "family": "-it"
   }, {"name": "pit", "imageUrl": "PIT.jpg", "imageData": "empty", "family": "-it"}, {
   "name": "sit",
   "imageUrl": "SIT.jpg",
   "imageData": "empty",
   "family": "-it"
   }, {"name": "big", "imageUrl": "BIG.jpg", "imageData": "empty", "family": "-ig"}, {
   "name": "pig",
   "imageUrl": "PIG.jpg",
   "imageData": "empty",
   "family": "-ig"
   }, {"name": "dig", "imageUrl": "DIG.jpg", "imageData": "empty", "family": "-ig"}, {
   "name": "fig",
   "imageUrl": "FIG.jpg",
   "imageData": "empty",
   "family": "-ig"
   }, {"name": "rig", "imageUrl": "RIG.jpg", "imageData": "empty", "family": "-ig"}, {
   "name": "wig",
   "imageUrl": "WIG.jpg",
   "imageData": "empty",
   "family": "-ig"
   }, {"name": "did", "imageUrl": "DID.jpg", "imageData": "empty", "family": "-id"}, {
   "name": "bid",
   "imageUrl": "BID.jpg",
   "imageData": "empty",
   "family": "-id"
   }, {"name": "hid", "imageUrl": "HID.jpg", "imageData": "empty", "family": "-id"}, {
   "name": "kid",
   "imageUrl": "KID.jpg",
   "imageData": "empty",
   "family": "-id"
   }, {"name": "lid", "imageUrl": "LID.jpg", "imageData": "empty", "family": "-id"}, {
   "name": "rid",
   "imageUrl": "RID.jpg",
   "imageData": "empty",
   "family": "-id"
   }, {"name": "him", "imageUrl": "HIM.jpg", "imageData": "empty", "family": "-im"}, {
   "name": "rim",
   "imageUrl": "RIM.jpg",
   "imageData": "empty",
   "family": "-im"
   }, {"name": "tim", "imageUrl": "TIM.jpg", "imageData": "empty", "family": "-im"}, {
   "name": "slim",
   "imageUrl": "SLIM.jpg",
   "imageData": "empty",
   "family": "-im"
   }, {"name": "swim", "imageUrl": "SWIM.jpg", "imageData": "empty", "family": "-im"}, {
   "name": "trim",
   "imageUrl": "TRIM.jpg",
   "imageData": "empty",
   "family": "-im"
   },  {
   "name": "bill",
   "imageUrl": "BILL.jpg",
   "imageData": "empty",
   "family": "-ill"
   }, {"name": "hill", "imageUrl": "HILL.jpg", "imageData": "empty", "family": "-ill"}, {
   "name": "pill",
   "imageUrl": "PILL.jpg",
   "imageData": "empty",
   "family": "-ill"
   }, {"name": "fill", "imageUrl": "FILL.jpg", "imageData": "empty", "family": "-ill"}, {
   "name": "mill",
   "imageUrl": "MILL.jpg",
   "imageData": "empty",
   "family": "-ill"
   }, {"name": "will", "imageUrl": "WILL.jpg", "imageData": "empty", "family": "-ill"}, {
   "name": "grill",
   "imageUrl": "GRILL.jpg",
   "imageData": "empty",
   "family": "-ill"
   }, {"name": "kick", "imageUrl": "KICK.jpg", "imageData": "empty", "family": "-ick"}, {
   "name": "lick",
   "imageUrl": "LICK.jpg",
   "imageData": "empty",
   "family": "-ick"
   }, {"name": "pick", "imageUrl": "PICK.jpg", "imageData": "empty", "family": "-ick"}, {
   "name": "sick",
   "imageUrl": "SICK.jpg",
   "imageData": "empty",
   "family": "-ick"
   }, {"name": "tick", "imageUrl": "TICK.jpg", "imageData": "empty", "family": "-ick"}, {
   "name": "brick",
   "imageUrl": "BRICK.jpg",
   "imageData": "empty",
   "family": "-ick"
   }, {"name": "click", "imageUrl": "CLICK.jpg", "imageData": "empty", "family": "-ick"}, {
   "name": "stick",
   "imageUrl": "STICK.jpg",
   "imageData": "empty",
   "family": "-ick"
   }, {"name": "ink", "imageUrl": "INK.jpg", "imageData": "empty", "family": "-ink"}, {
   "name": "pink",
   "imageUrl": "PINK.jpg",
   "imageData": "empty",
   "family": "-ink"
   }, {"name": "mink", "imageUrl": "MINK.jpg", "imageData": "empty", "family": "-ink"}, {
   "name": "link",
   "imageUrl": "LINK.jpg",
   "imageData": "empty",
   "family": "-ink"
   }, {"name": "rink", "imageUrl": "RINK.jpg", "imageData": "empty", "family": "-ink"}, {
   "name": "drink",
   "imageUrl": "DRINK.jpg",
   "imageData": "empty",
   "family": "-ink"
   }, {"name": "king", "imageUrl": "KING.jpg", "imageData": "empty", "family": "-ing"}, {
   "name": "ring",
   "imageUrl": "RING.jpg",
   "imageData": "empty",
   "family": "-ing"
   }, {"name": "sing", "imageUrl": "SING.jpg", "imageData": "empty", "family": "-ing"}, {
   "name": "bring",
   "imageUrl": "BRING.jpg",
   "imageData": "empty",
   "family": "-ing"
   }, {"name": "spring", "imageUrl": "SPRING.jpg", "imageData": "empty", "family": "-ing"}, {
   "name": "string",
   "imageUrl": "STRING.jpg",
   "imageData": "empty",
   "family": "-ing"
   }, {"name": "fish", "imageUrl": "FISH.jpg", "imageData": "empty", "family": "-ish"}, {
   "name": "dish",
   "imageUrl": "DISH.jpg",
   "imageData": "empty",
   "family": "-ish"
   }, {"name": "wish", "imageUrl": "WISH.jpg", "imageData": "empty", "family": "-ish"}, {
   "name": "swish",
   "imageUrl": "SWISH.jpg",
   "imageData": "empty",
   "family": "-ish"
   }, {"name": "squish", "imageUrl": "SQUISH.jpg", "imageData": "empty", "family": "-ish"}, {
   "name": "british",
   "imageUrl": "BRITISH.jpg",
   "imageData": "empty",
   "family": "-ish"
   }, {"name": "orange", "imageUrl": "ORANGE.jpg", "imageData": "empty", "family": "-age"}, {
   "name": "storage",
   "imageUrl": "STORAGE.jpg",
   "imageData": "empty",
   "family": "-age"
   }, {"name": "sausage", "imageUrl": "SAUSAGE.jpg", "imageData": "empty", "family": "-age"}, {
   "name": "village",
   "imageUrl": "VILLAGE.jpg",
   "imageData": "empty",
   "family": "-age"
   }, {"name": "cabbage", "imageUrl": "CABBAGE.jpg", "imageData": "empty", "family": "-age"}, {
   "name": "package",
   "imageUrl": "PACKAGE.jpg",
   "imageData": "empty",
   "family": "-age"
   }, {"name": "candy", "imageUrl": "CANDY.jpg", "imageData": "empty", "family": "-y"}, {
   "name": "jelly",
   "imageUrl": "JELLY.jpg",
   "imageData": "empty",
   "family": "-y"
   },  {"name": "happy", "imageUrl": "HAPPY.jpg", "imageData": "empty", "family": "-y"}, {
   "name": "funny",
   "imageUrl": "FUNNY.jpg",
   "imageData": "empty",
   "family": "-y"
   }, {"name": "gym", "imageUrl": "GYM.jpg", "imageData": "empty", "family": "-y"}, {
   "name": "lynx",
   "imageUrl": "LYNX.jpg",
   "imageData": "empty",
   "family": "-y"
   }, {"name": "pyramid", "imageUrl": "PYRAMID.jpg", "imageData": "empty", "family": "-y"}, {
   "name": "system",
   "imageUrl": "SYSTEM.jpg",
   "imageData": "empty",
   "family": "-y"
   }, {"name": "symbol", "imageUrl": "SYMBOL.jpg", "imageData": "empty", "family": "-y"}, {
   "name": "bicycle",
   "imageUrl": "BICYCLE.jpg",
   "imageData": "empty",
   "family": "-y"
   }, {"name": "remember", "imageUrl": "REMEMBER.jpg", "imageData": "empty", "family": "-e"}, {
   "name": "december",
   "imageUrl": "DECEMBER.jpg",
   "imageData": "empty",
   "family": "-e"
   }, {"name": "decide", "imageUrl": "DECIDE.jpg", "imageData": "empty", "family": "-e"}, {
   "name": "pretty",
   "imageUrl": "PRETTY.jpg",
   "imageData": "empty",
   "family": "-e"
   }, {
   "name": "carpet",
   "imageUrl": "CARPET.jpg",
   "imageData": "empty",
   "family": "-e"
   }, {"name": "honey", "imageUrl": "HONEY.jpg", "imageData": "empty", "family": "-ey"}, {
   "name": "money",
   "imageUrl": "MONEY.jpg",
   "imageData": "empty",
   "family": "-ey"
   }, {"name": "monkey", "imageUrl": "MONKEY.jpg", "imageData": "empty", "family": "-ey"}, {
   "name": "donkey",
   "imageUrl": "DONKEY.jpg",
   "imageData": "empty",
   "family": "-ey"
   }, {"name": "trolley", "imageUrl": "TROLLEY.jpg", "imageData": "empty", "family": "-ey"}, {
   "name": "valley",
   "imageUrl": "VALLEY.jpg",
   "imageData": "empty",
   "family": "-ey"
   }, {"name": "ski", "imageUrl": "SKI.jpg", "imageData": "empty", "family": "-i"}, {
   "name": "live",
   "imageUrl": "LIVE.jpg",
   "imageData": "empty",
   "family": "-i"
   }, {"name": "give", "imageUrl": "GIVE.jpg", "imageData": "empty", "family": "-i"}, {
   "name": "river",
   "imageUrl": "RIVER.jpg",
   "imageData": "empty",
   "family": "-i"
   }, {"name": "city", "imageUrl": "CITY.jpg", "imageData": "empty", "family": "-i"}, {
   "name": "cinema",
   "imageUrl": "CINEMA.jpg",
   "imageData": "empty",
   "family": "-i"
   }, {"name": "visit", "imageUrl": "VISIT.jpg", "imageData": "empty", "family": "-i"},{"name": "vitamin", "imageUrl": "VITAMIN.jpg", "imageData": "empty", "family": "-i"}, {
   "name": "ill",
   "imageUrl": "ILL.jpg",
   "imageData": "empty",
   "family": "-i"
   }, {"name": "inch", "imageUrl": "INCH.jpg", "imageData": "empty", "family": "-i"}, {
   "name": "insect",
   "imageUrl": "INSECT.jpg",
   "imageData": "empty",
   "family": "-i"
   }, {"name": "image", "imageUrl": "IMAGE.jpg", "imageData": "empty", "family": "-i"}, {
   "name": "iploo",
   "imageUrl": "IPLOO.jpg",
   "imageData": "empty",
   "family": "-i"
   }, {"name": "iguana", "imageUrl": "IGUANA.jpg", "imageData": "empty", "family": "-i"}, {
   "name": "indian",
   "imageUrl": "INDIAN.jpg",
   "imageData": "empty",
   "family": "-i"
   }, {"name": "india", "imageUrl": "INDIA.jpg", "imageData": "empty", "family": "-i"}, {
   "name": "milk",
   "imageUrl": "MILK.jpg",
   "imageData": "empty",
   "family": "-i"
   }, {
   "name": "ribbon",
   "imageUrl": "RIBBON.jpg",
   "imageData": "empty",
   "family": "-i"
   }, {"name": "kitten", "imageUrl": "KITTEN.jpg", "imageData": "empty", "family": "-i"}, {
   "name": "skin",
   "imageUrl": "SKIN.jpg",
   "imageData": "empty",
   "family": "-i"
   }, {"name": "gift", "imageUrl": "GIFT.jpg", "imageData": "empty", "family": "-i"}, {
   "name": "busy",
   "imageUrl": "BUSY.jpg",
   "imageData": "empty",
   "family": "-u ui"
   }, {"name": "business", "imageUrl": "BUSINESS.jpg", "imageData": "empty", "family": "-u ui"}, {
   "name": "biscuit",
   "imageUrl": "BISCUIT.jpg",
   "imageData": "empty",
   "family": "-u ui"
   }, {"name": "build", "imageUrl": "BUILD.jpg", "imageData": "empty", "family": "-u ui"}, {
   "name": "buliding",
   "imageUrl": "BULIDING.jpg",
   "imageData": "empty",
   "family": "-u ui"
   }, {"name": "guiter", "imageUrl": "GUITER.jpg", "imageData": "empty", "family": "-u ui"}, {
   "name": "dog",
   "imageUrl": "DOG.jpg",
   "imageData": "empty",
   "family": "-og"
   }, {"name": "fog", "imageUrl": "FOG.jpg", "imageData": "empty", "family": "-og"}, {
   "name": "log",
   "imageUrl": "LOG.jpg",
   "imageData": "empty",
   "family": "-og"
   }, {"name": "frog", "imageUrl": "FROG.jpg", "imageData": "empty", "family": "-og"}, {
   "name": "hot",
   "imageUrl": "HOT.jpg",
   "imageData": "empty",
   "family": "-ot"
   }, {"name": "pot", "imageUrl": "POT.jpg", "imageData": "empty", "family": "-ot"}, {
   "name": "not",
   "imageUrl": "NOT.jpg",
   "imageData": "empty",
   "family": "-ot"
   }, {"name": "got", "imageUrl": "GOT.jpg", "imageData": "empty", "family": "-ot"}, {
   "name": "lot",
   "imageUrl": "LOT.jpg",
   "imageData": "empty",
   "family": "-ot"
   }, {"name": "slot", "imageUrl": "SLOT.jpg", "imageData": "empty", "family": "-ot"}, {
   "name": "hop",
   "imageUrl": "HOP.jpg",
   "imageData": "empty",
   "family": "-op"
   }, {"name": "mop", "imageUrl": "MOP.jpg", "imageData": "empty", "family": "-op"}, {
   "name": "cop",
   "imageUrl": "COP.jpg",
   "imageData": "empty",
   "family": "-op"
   }, {"name": "pop", "imageUrl": "POP.jpg", "imageData": "empty", "family": "-op"}, {
   "name": "top",
   "imageUrl": "TOP.jpg",
   "imageData": "empty",
   "family": "-op"
   }, {"name": "stop", "imageUrl": "STOP.jpg", "imageData": "empty", "family": "-op"}, {
   "name": "cob",
   "imageUrl": "COB.jpg",
   "imageData": "empty",
   "family": "-ob"
   }, {"name": "sob", "imageUrl": "SOB.jpg", "imageData": "empty", "family": "-ob"}, {
   "name": "job",
   "imageUrl": "JOB.jpg",
   "imageData": "empty",
   "family": "-ob"
   }, {"name": "fob", "imageUrl": "FOB.jpg", "imageData": "empty", "family": "-ob"}, {
   "name": "bob",
   "imageUrl": "BOB.jpg",
   "imageData": "empty",
   "family": "-ob"
   }, {"name": "rob", "imageUrl": "ROB.jpg", "imageData": "empty", "family": "-ob"}, {
   "name": "rod",
   "imageUrl": "ROD.jpg",
   "imageData": "empty",
   "family": "-od"
   }, {"name": "cod", "imageUrl": "COD.jpg", "imageData": "empty", "family": "-od"}, {
   "name": "nod",
   "imageUrl": "NOD.jpg",
   "imageData": "empty",
   "family": "-od"
   }, {"name": "god", "imageUrl": "GOD.jpg", "imageData": "empty", "family": "-od"}, {
   "name": "long",
   "imageUrl": "LONG.jpg",
   "imageData": "empty",
   "family": "-ong"
   }, {"name": "along", "imageUrl": "ALONG.jpg", "imageData": "empty", "family": "-ong"}, {
   "name": "belong",
   "imageUrl": "BELONG.jpg",
   "imageData": "empty",
   "family": "-ong"
   }, {"name": "song", "imageUrl": "SONG.jpg", "imageData": "empty", "family": "-ong"}, {
   "name": "strong",
   "imageUrl": "STRONG.jpg",
   "imageData": "empty",
   "family": "-ong"
   }, {"name": "wrong", "imageUrl": "WRONG.jpg", "imageData": "empty", "family": "-ong"}, {
   "name": "lock",
   "imageUrl": "LOCK.jpg",
   "imageData": "empty",
   "family": "-ock"
   }, {"name": "clock", "imageUrl": "CLOCK.jpg", "imageData": "empty", "family": "-ock"}, {
   "name": "block",
   "imageUrl": "BLOCK.jpg",
   "imageData": "empty",
   "family": "-ock"
   }, {"name": "rock", "imageUrl": "ROCK.jpg", "imageData": "empty", "family": "-ock"}, {
   "name": "sock",
   "imageUrl": "SOCK.jpg",
   "imageData": "empty",
   "family": "-ock"
   }, {"name": "stock", "imageUrl": "STOCK.jpg", "imageData": "empty", "family": "-ock"}, {
   "name": "quality",
   "imageUrl": "QUALITY.jpg",
   "imageData": "empty",
   "family": "-qua-"
   }, {"name": "quantity", "imageUrl": "QUANTITY.jpg", "imageData": "empty", "family": "-qua-"}, {
   "name": "quarrel",
   "imageUrl": "QUARREL.jpg",
   "imageData": "empty",
   "family": "-qua-"
   }, {"name": "quadreate", "imageUrl": "QUADREATE.jpg", "imageData": "empty", "family": "-qua-"}, {
   "name": "box",
   "imageUrl": "BOX.jpg",
   "imageData": "empty",
   "family": "-o"
   }, {"name": "fox", "imageUrl": "FOX.jpg", "imageData": "empty", "family": "-o"}, {
   "name": "doll",
   "imageUrl": "DOLL.jpg",
   "imageData": "empty",
   "family": "-o"
   }, {"name": "rocket", "imageUrl": "ROCKET.jpg", "imageData": "empty", "family": "-o"}, {
   "name": "pocket",
   "imageUrl": "POCKET.jpg",
   "imageData": "empty",
   "family": "-o"
   }, {"name": "forest", "imageUrl": "FOREST.jpg", "imageData": "empty", "family": "-o"}, {
   "name": "olive",
   "imageUrl": "OLIVE.jpg",
   "imageData": "empty",
   "family": "-o"
   }, {"name": "otter", "imageUrl": "OTTER.jpg", "imageData": "empty", "family": "-o"}, {
   "name": "ox",
   "imageUrl": "OX.jpg",
   "imageData": "empty",
   "family": "-o"
   }, {"name": "octopus", "imageUrl": "OCTOPUS.jpg", "imageData": "empty", "family": "-o"}, {
   "name": "ostrich",
   "imageUrl": "OSTRICH.jpg",
   "imageData": "empty",
   "family": "-o"
   }, {"name": "orang", "imageUrl": "ORANG.jpg", "imageData": "empty", "family": "-o"}, {
   "name": "office",
   "imageUrl": "OFFICE.jpg",
   "imageData": "empty",
   "family": "-o"
   }, {"name": "object", "imageUrl": "OBJECT.jpg", "imageData": "empty", "family": "-o"}, {
   "name": "was",
   "imageUrl": "WAS.jpg",
   "imageData": "empty",
   "family": "-a"
   }, {"name": "want", "imageUrl": "WANT.jpg", "imageData": "empty", "family": "-a"}, {
   "name": "watch",
   "imageUrl": "WATCH.jpg",
   "imageData": "empty",
   "family": "-a"
   }, {"name": "wasp", "imageUrl": "WASP.jpg", "imageData": "empty", "family": "-a"}, {
   "name": "wash",
   "imageUrl": "WASH.jpg",
   "imageData": "empty",
   "family": "-a"
   }, {"name": "washington", "imageUrl": "WASHINGTON.jpg", "imageData": "empty", "family": "-a"}, {
   "name": "Austria",
   "imageUrl": "AUSTRIA.jpg",
   "imageData": "empty",
   "family": "-au"
   }, {
   "name": "australia",
   "imageUrl": "AUSTRALIA.jpg",
   "imageData": "empty",
   "family": "-au"
   }, {
   "name": "cauliflower",
   "imageUrl": "CAULIFLOWER.jpg",
   "imageData": "empty",
   "family": "-au"
   },  {
   "name": "run",
   "imageUrl": "RUN.jpg",
   "imageData": "empty",
   "family": "-un"
   }, {"name": "sun", "imageUrl": "SUN.jpg", "imageData": "empty", "family": "-un"}, {
   "name": "gun",
   "imageUrl": "GUN.jpg",
   "imageData": "empty",
   "family": "-un"
   }, {"name": "bun", "imageUrl": "BUN.jpg", "imageData": "empty", "family": "-un"}, {
   "name": "fun",
   "imageUrl": "FUN.jpg",
   "imageData": "empty",
   "family": "-un"
   }, {"name": "dun", "imageUrl": "DUN.jpg", "imageData": "empty", "family": "-un"}, {
   "name": "but",
   "imageUrl": "BUT.jpg",
   "imageData": "empty",
   "family": "-ut"
   }, {"name": "cut", "imageUrl": "CUT.jpg", "imageData": "empty", "family": "-ut"}, {
   "name": "hut",
   "imageUrl": "HUT.jpg",
   "imageData": "empty",
   "family": "-ut"
   }, {"name": "nut", "imageUrl": "NUT.jpg", "imageData": "empty", "family": "-ut"}, {
   "name": "tut",
   "imageUrl": "TUT.jpg",
   "imageData": "empty",
   "family": "-ut"
   }, {"name": "shut", "imageUrl": "SHUT.jpg", "imageData": "empty", "family": "-ut"}, {
   "name": "bug",
   "imageUrl": "BUG.jpg",
   "imageData": "empty",
   "family": "-ug"
   }, {"name": "mug", "imageUrl": "MUG.jpg", "imageData": "empty", "family": "-ug"}, {
   "name": "jug",
   "imageUrl": "JUG.jpg",
   "imageData": "empty",
   "family": "-ug"
   }, {"name": "hug", "imageUrl": "HUG.jpg", "imageData": "empty", "family": "-ug"}, {
   "name": "rug",
   "imageUrl": "RUG.jpg",
   "imageData": "empty",
   "family": "-ug"
   }, {"name": "plug", "imageUrl": "PLUG.jpg", "imageData": "empty", "family": "-ug"}, {
   "name": "gum",
   "imageUrl": "GUM.jpg",
   "imageData": "empty",
   "family": "-um"
   }, {"name": "hum", "imageUrl": "HUM.jpg", "imageData": "empty", "family": "-um"}, {
   "name": "drum",
   "imageUrl": "DRUM.jpg",
   "imageData": "empty",
   "family": "-um"
   }, {"name": "sum", "imageUrl": "SUM.jpg", "imageData": "empty", "family": "-um"}, {
   "name": "tum",
   "imageUrl": "TUM.jpg",
   "imageData": "empty",
   "family": "-um"
   }, {"name": "yum", "imageUrl": "YUM.jpg", "imageData": "empty", "family": "-um"}, {
   "name": "cub",
   "imageUrl": "CUB.jpg",
   "imageData": "empty",
   "family": "-un"
   }, {"name": "club", "imageUrl": "CLUB.jpg", "imageData": "empty", "family": "-un"}, {
   "name": "tub",
   "imageUrl": "TUB.jpg",
   "imageData": "empty",
   "family": "-un"
   }, {"name": "dub", "imageUrl": "DUB.jpg", "imageData": "empty", "family": "-un"}, {
   "name": "rub",
   "imageUrl": "RUB.jpg",
   "imageData": "empty",
   "family": "-un"
   }, {"name": "scrub", "imageUrl": "SCRUB.jpg", "imageData": "empty", "family": "-un"}, {
   "name": "bud",
   "imageUrl": "BUD.jpg",
   "imageData": "empty",
   "family": "-ud"
   }, {"name": "mud", "imageUrl": "MUD.jpg", "imageData": "empty", "family": "-ud"}, {
   "name": "pud",
   "imageUrl": "PUD.jpg",
   "imageData": "empty",
   "family": "-ud"
   }, {"name": "stud", "imageUrl": "STUD.jpg", "imageData": "empty", "family": "-ud"}, {
   "name": "up",
   "imageUrl": "UP.jpg",
   "imageData": "empty",
   "family": "-up"
   }, {"name": "cup", "imageUrl": "CUP.jpg", "imageData": "empty", "family": "-up"}, {
   "name": "pup",
   "imageUrl": "PUP.jpg",
   "imageData": "empty",
   "family": "-up"
   }, {"name": "sup", "imageUrl": "SUP.jpg", "imageData": "empty", "family": "-up"}, {
   "name": "duck",
   "imageUrl": "DUCK.jpg",
   "imageData": "empty",
   "family": "-unk"
   }, {"name": "luck", "imageUrl": "LUCK.jpg", "imageData": "empty", "family": "-unk"}, {
   "name": "truck",
   "imageUrl": "TRUCK.jpg",
   "imageData": "empty",
   "family": "-unk"
   }, {"name": "puck", "imageUrl": "PUCK.jpg", "imageData": "empty", "family": "-unk"}, {
   "name": "tuck",
   "imageUrl": "TUCK.jpg",
   "imageData": "empty",
   "family": "-unk"
   }, {"name": "cluck", "imageUrl": "CLUCK.jpg", "imageData": "empty", "family": "-unk"}, {
   "name": "trunk",
   "imageUrl": "TRUNK.jpg",
   "imageData": "empty",
   "family": "-unk"
   }, {"name": "skunk", "imageUrl": "SKUNK.jpg", "imageData": "empty", "family": "-unk"}, {
   "name": "junk",
   "imageUrl": "JUNK.jpg",
   "imageData": "empty",
   "family": "-unk"
   }, {"name": "spunk", "imageUrl": "SPUNK.jpg", "imageData": "empty", "family": "-unk"}, {
   "name": "bump",
   "imageUrl": "BUMP.jpg",
   "imageData": "empty",
   "family": "-ump"
   }, {"name": "dump", "imageUrl": "DUMP.jpg", "imageData": "empty", "family": "-ump"}, {
   "name": "jump",
   "imageUrl": "JUMP.jpg",
   "imageData": "empty",
   "family": "-ump"
   }, {"name": "pump", "imageUrl": "PUMP.jpg", "imageData": "empty", "family": "-ump"}, {
   "name": "grump",
   "imageUrl": "GRUMP.jpg",
   "imageData": "empty",
   "family": "-ump"
   }, {"name": "plump", "imageUrl": "PLUMP.jpg", "imageData": "empty", "family": "-ump"}, {
   "name": "dust",
   "imageUrl": "DUST.jpg",
   "imageData": "empty",
   "family": "-ust"
   }, {"name": "must", "imageUrl": "MUST.jpg", "imageData": "empty", "family": "-ust"}, {
   "name": "just",
   "imageUrl": "JUST.jpg",
   "imageData": "empty",
   "family": "-ust"
   }, {"name": "rust", "imageUrl": "RUST.jpg", "imageData": "empty", "family": "-ust"}, {
   "name": "trust",
   "imageUrl": "TRUST.jpg",
   "imageData": "empty",
   "family": "-ust"
   }, {"name": "crust", "imageUrl": "CRUST.jpg", "imageData": "empty", "family": "-ust"}, {
   "name": "bus",
   "imageUrl": "BUS.jpg",
   "imageData": "empty",
   "family": "-u"
   }, {"name": "brush", "imageUrl": "BRUSH.jpg", "imageData": "empty", "family": "-u"}, {
   "name": "much",
   "imageUrl": "MUCH.jpg",
   "imageData": "empty",
   "family": "-u"
   }, {"name": "lunch", "imageUrl": "LUNCH.jpg", "imageData": "empty", "family": "-u"}, {
   "name": "summer",
   "imageUrl": "SUMMER.jpg",
   "imageData": "empty",
   "family": "-u"
   }, {"name": "number", "imageUrl": "NUMBER.jpg", "imageData": "empty", "family": "-u"}, {
   "name": "umbrella",
   "imageUrl": "UMBRELLA.jpg",
   "imageData": "empty",
   "family": "-u"
   }, {"name": "uncle", "imageUrl": "UNCLE.jpg", "imageData": "empty", "family": "-u"}, {
   "name": "ugly",
   "imageUrl": "UGLY.jpg",
   "imageData": "empty",
   "family": "-u"
   }, {"name": "unlike", "imageUrl": "UNLIKE.jpg", "imageData": "empty", "family": "-u"}, {
   "name": "under",
   "imageUrl": "UNDER.jpg",
   "imageData": "empty",
   "family": "-u"
   }, {"name": "underwear", "imageUrl": "UNDERWEAR.jpg", "imageData": "empty", "family": "-u"}, {
   "name": "some",
   "imageUrl": "SOME.jpg",
   "imageData": "empty",
   "family": "-o"
   }, {"name": "come", "imageUrl": "COME.jpg", "imageData": "empty", "family": "-o"}, {
   "name": "love",
   "imageUrl": "LOVE.jpg",
   "imageData": "empty",
   "family": "-o"
   }, {"name": "london", "imageUrl": "LONDON.jpg", "imageData": "empty", "family": "-o"}, {
   "name": "colour",
   "imageUrl": "COLOUR.jpg",
   "imageData": "empty",
   "family": "-o"
   }, {"name": "company", "imageUrl": "COMPANY.jpg", "imageData": "empty", "family": "-o"}, {
   "name": "month",
   "imageUrl": "MONTH.jpg",
   "imageData": "empty",
   "family": "-o"
   }, {"name": "done", "imageUrl": "DONE.jpg", "imageData": "empty", "family": "-o"}, {
   "name": "blood",
   "imageUrl": "BLOOD.jpg",
   "imageData": "empty",
   "family": "-oo"
   }, {"name": "flood", "imageUrl": "FLOOD.jpg", "imageData": "empty", "family": "-oo"}, {
   "name": "touch",
   "imageUrl": "TOUCH.jpg",
   "imageData": "empty",
   "family": "-ou"
   }, {"name": "double", "imageUrl": "DOUBLE.jpg", "imageData": "empty", "family": "-ou"}, {
   "name": "trouble",
   "imageUrl": "TROUBLE.jpg",
   "imageData": "empty",
   "family": "-ou"
   }, {"name": "nourish", "imageUrl": "NOURISH.jpg", "imageData": "empty", "family": "-ou"}, {
   "name": "country",
   "imageUrl": "COUNTRY.jpg",
   "imageData": "empty",
   "family": "-ou"
   }, {"name": "young", "imageUrl": "YOUNG.jpg", "imageData": "empty", "family": "-ou"}, {
   "name": "cake",
   "imageUrl": "CAKE.jpg",
   "imageData": "empty",
   "family": "-ake"
   }, {
   "name": "rake",
   "imageUrl": "RAKE.jpg",
   "imageData": "empty",
   "family": "-ake"
   }, {"name": "make", "imageUrl": "MAKE.jpg", "imageData": "empty", "family": "-ake"}, {
   "name": "take",
   "imageUrl": "TAKE.jpg",
   "imageData": "empty",
   "family": "-ake"
   }, {"name": "snake", "imageUrl": "SNAKE.jpg", "imageData": "empty", "family": "-ake"}, {
   "name": "game",
   "imageUrl": "GAME.jpg",
   "imageData": "empty",
   "family": "-ame"
   }, {"name": "same", "imageUrl": "SAME.jpg", "imageData": "empty", "family": "-ame"}, {
   "name": "fame",
   "imageUrl": "FAME.jpg",
   "imageData": "empty",
   "family": "-ame"
   }, {"name": "name", "imageUrl": "NAME.jpg", "imageData": "empty", "family": "-ame"}, {
   "name": "tame",
   "imageUrl": "TAME.jpg",
   "imageData": "empty",
   "family": "-ame"
   }, {"name": "frame", "imageUrl": "FRAME.jpg", "imageData": "empty", "family": "-ame"}, {
   "name": "gate",
   "imageUrl": "GATE.jpg",
   "imageData": "empty",
   "family": "-ate"
   }, {"name": "plate", "imageUrl": "PLATE.jpg", "imageData": "empty", "family": "-ate"}, {
   "name": "skate",
   "imageUrl": "SKATE.jpg",
   "imageData": "empty",
   "family": "-ate"
   }, {"name": "date", "imageUrl": "DATE.jpg", "imageData": "empty", "family": "-ate"}, {
   "name": "late",
   "imageUrl": "LATE.jpg",
   "imageData": "empty",
   "family": "-ate"
   }, {"name": "state", "imageUrl": "STATE.jpg", "imageData": "empty", "family": "-ate"}, {
   "name": "pale",
   "imageUrl": "PALE.jpg",
   "imageData": "empty",
   "family": "-ale"
   }, {"name": "sale", "imageUrl": "SALE.jpg", "imageData": "empty", "family": "-ale"}, {
   "name": "tale",
   "imageUrl": "TALE.jpg",
   "imageData": "empty",
   "family": "-ale"
   }, {"name": "gale", "imageUrl": "GALE.jpg", "imageData": "empty", "family": "-ale"}, {
   "name": "cane",
   "imageUrl": "CANE.jpg",
   "imageData": "empty",
   "family": "-ane"
   }, {"name": "lane", "imageUrl": "LANE.jpg", "imageData": "empty", "family": "-ane"}, {
   "name": "mane",
   "imageUrl": "MANE.jpg",
   "imageData": "empty",
   "family": "-ane"
   }, {"name": "plane", "imageUrl": "PLANE.jpg", "imageData": "empty", "family": "-ane"}, {
   "name": "crane",
   "imageUrl": "CRANE.jpg",
   "imageData": "empty",
   "family": "-ane"
   }, {"name": "jane", "imageUrl": "JANE.jpg", "imageData": "empty", "family": "-ane"}, {
   "name": "face",
   "imageUrl": "FACE.jpg",
   "imageData": "empty",
   "family": "-ace"
   }, {"name": "lace", "imageUrl": "LACE.jpg", "imageData": "empty", "family": "-ace"}, {
   "name": "place",
   "imageUrl": "PLACE.jpg",
   "imageData": "empty",
   "family": "-ace"
   }, {"name": "space", "imageUrl": "SPACE.jpg", "imageData": "empty", "family": "-ace"}, {
   "name": "trace",
   "imageUrl": "TRACE.jpg",
   "imageData": "empty",
   "family": "-ace"
   }, {"name": "grace", "imageUrl": "GRACE.jpg", "imageData": "empty", "family": "-ace"}, {
   "name": "ape",
   "imageUrl": "APE.jpg",
   "imageData": "empty",
   "family": "-a-e"
   }, {"name": "tape", "imageUrl": "TAPE.jpg", "imageData": "empty", "family": "-a-e"}, {
   "name": "grape",
   "imageUrl": "GRAPE.jpg",
   "imageData": "empty",
   "family": "-a-e"
   }, {"name": "save", "imageUrl": "SAVE.jpg", "imageData": "empty", "family": "-a-e"}, {
   "name": "cave",
   "imageUrl": "CAVE.jpg",
   "imageData": "empty",
   "family": "-a-e"
   }, {"name": "maze", "imageUrl": "MAZE.jpg", "imageData": "empty", "family": "-a-e"}, {
   "name": "baby",
   "imageUrl": "BABY.jpg",
   "imageData": "empty",
   "family": "-a-y"
   }, {"name": "lady", "imageUrl": "LADY.jpg", "imageData": "empty", "family": "-a-y"}, {
   "name": "lazy",
   "imageUrl": "LAZY.jpg",
   "imageData": "empty",
   "family": "-a-y"
   }, {"name": "wazy", "imageUrl": "WAZY.jpg", "imageData": "empty", "family": "-a-y"}, {
   "name": "table",
   "imageUrl": "TABLE.jpg",
   "imageData": "empty",
   "family": "-a"
   }, {"name": "cable", "imageUrl": "CABLE.jpg", "imageData": "empty", "family": "-a"}, {
   "name": "fable",
   "imageUrl": "FABLE.jpg",
   "imageData": "empty",
   "family": "-a"
   }, {"name": "maple", "imageUrl": "MAPLE.jpg", "imageData": "empty", "family": "-a"}, {
   "name": "ladle",
   "imageUrl": "LADLE.jpg",
   "imageData": "empty",
   "family": "-a"
   }, {"name": "cradle", "imageUrl": "CRADLE.jpg", "imageData": "empty", "family": "-a"}, {
   "name": "angel",
   "imageUrl": "ANGEL.jpg",
   "imageData": "empty",
   "family": "-a"
   }, {"name": "acron", "imageUrl": "ACRON.jpg", "imageData": "empty", "family": "-a"}, {
   "name": "paper",
   "imageUrl": "PAPER.jpg",
   "imageData": "empty",
   "family": "-a"
   },  {
   "name": "raven",
   "imageUrl": "RAVEN.jpg",
   "imageData": "empty",
   "family": "-a"
   }, {"name": "hazel", "imageUrl": "HAZEL.jpg", "imageData": "empty", "family": "-a"}, {
   "name": "day",
   "imageUrl": "DAY.jpg",
   "imageData": "empty",
   "family": "-ay"
   }, {"name": "may", "imageUrl": "MAY.jpg", "imageData": "empty", "family": "-ay"}, {
   "name": "pay",
   "imageUrl": "PAY.jpg",
   "imageData": "empty",
   "family": "-ay"
   }, {"name": "lay", "imageUrl": "LAY.jpg", "imageData": "empty", "family": "-ay"}, {
   "name": "say",
   "imageUrl": "SAY.jpg",
   "imageData": "empty",
   "family": "-ay"
   }, {"name": "stay", "imageUrl": "STAY.jpg", "imageData": "empty", "family": "-ay"}, {
   "name": "daisy",
   "imageUrl": "DAISY.jpg",
   "imageData": "empty",
   "family": "-ai"
   }, {"name": "rain", "imageUrl": "RAIN.jpg", "imageData": "empty", "family": "-ai"}, {
   "name": "train",
   "imageUrl": "TRAIN.jpg",
   "imageData": "empty",
   "family": "-ai"
   }, {"name": "pail", "imageUrl": "PAIL.jpg", "imageData": "empty", "family": "-ai"}, {
   "name": "sail",
   "imageUrl": "SAIL.jpg",
   "imageData": "empty",
   "family": "-ai"
   }, {"name": "snail", "imageUrl": "SNAIL.jpg", "imageData": "empty", "family": "-ai"}, {
   "name": "be",
   "imageUrl": "BE.jpg",
   "imageData": "empty",
   "family": "-e"
   }, {"name": "me", "imageUrl": "ME.jpg", "imageData": "empty", "family": "-e"}, {
   "name": "he",
   "imageUrl": "HE.jpg",
   "imageData": "empty",
   "family": "-e"
   }, {"name": "she", "imageUrl": "SHE.jpg", "imageData": "empty", "family": "-e"}, {
   "name": "we",
   "imageUrl": "WE.jpg",
   "imageData": "empty",
   "family": "-e"
   }, {"name": "even", "imageUrl": "EVEN.jpg", "imageData": "empty", "family": "-e"}, {
   "name": "evening",
   "imageUrl": "EVENING.jpg",
   "imageData": "empty",
   "family": "-e"
   }, {"name": "pete", "imageUrl": "PETE.jpg", "imageData": "empty", "family": "-e"}, {
   "name": "bee",
   "imageUrl": "BEE.jpg",
   "imageData": "empty",
   "family": "-ee"
   }, {"name": "see", "imageUrl": "SEE.jpg", "imageData": "empty", "family": "-ee"}, {
   "name": "fee",
   "imageUrl": "FEE.jpg",
   "imageData": "empty",
   "family": "-ee"
   }, {"name": "free", "imageUrl": "FREE.jpg", "imageData": "empty", "family": "-ee"}, {
   "name": "tree",
   "imageUrl": "TREE.jpg",
   "imageData": "empty",
   "family": "-ee"
   }, {"name": "three", "imageUrl": "THREE.jpg", "imageData": "empty", "family": "-ee"}, {
   "name": "feet",
   "imageUrl": "FEET.jpg",
   "imageData": "empty",
   "family": "-ee"
   }, {"name": "meet", "imageUrl": "MEET.jpg", "imageData": "empty", "family": "-ee"}, {
   "name": "greet",
   "imageUrl": "GREET.jpg",
   "imageData": "empty",
   "family": "-ee"
   }, {"name": "street", "imageUrl": "STREET.jpg", "imageData": "empty", "family": "-ee"}, {
   "name": "deep",
   "imageUrl": "DEEP.jpg",
   "imageData": "empty",
   "family": "-ee"
   }, {"name": "keep", "imageUrl": "KEEP.jpg", "imageData": "empty", "family": "-ee"}, {
   "name": "sleep",
   "imageUrl": "SLEEP.jpg",
   "imageData": "empty",
   "family": "-ee"
   }, {"name": "sheep", "imageUrl": "SHEEP.jpg", "imageData": "empty", "family": "-ee"}, {
   "name": "week",
   "imageUrl": "WEEK.jpg",
   "imageData": "empty",
   "family": "-ee"
   }, {"name": "leek", "imageUrl": "LEEK.jpg", "imageData": "empty", "family": "-ee"}, {
   "name": "cheek",
   "imageUrl": "CHEEK.jpg",
   "imageData": "empty",
   "family": "-ee"
   }, {"name": "peek", "imageUrl": "PEEK.jpg", "imageData": "empty", "family": "-ee"}, {
   "name": "seek",
   "imageUrl": "SEEK.jpg",
   "imageData": "empty",
   "family": "-ee"
   }, {"name": "green", "imageUrl": "GREEN.jpg", "imageData": "empty", "family": "-ee"}, {
   "name": "queen",
   "imageUrl": "QUEEN.jpg",
   "imageData": "empty",
   "family": "-ee"
   }, {"name": "screen", "imageUrl": "SCREEN.jpg", "imageData": "empty", "family": "-ee"}, {
   "name": "sea",
   "imageUrl": "SEA.jpg",
   "imageData": "empty",
   "family": "-ea"
   }, {"name": "tea", "imageUrl": "TEA.jpg", "imageData": "empty", "family": "-ea"}, {
   "name": "read",
   "imageUrl": "READ.jpg",
   "imageData": "empty",
   "family": "-ea"
   }, {"name": "speak", "imageUrl": "SPEAK.jpg", "imageData": "empty", "family": "-ea"}, {
   "name": "leaf",
   "imageUrl": "LEAF.jpg",
   "imageData": "empty",
   "family": "-ea"
   }, {"name": "meat", "imageUrl": "MEAT.jpg", "imageData": "empty", "family": "-ea"}, {
   "name": "clean",
   "imageUrl": "CLEAN.jpg",
   "imageData": "empty",
   "family": "-ea"
   }, {"name": "weak", "imageUrl": "WEAK.jpg", "imageData": "empty", "family": "-ea"}, {
   "name": "kiwi",
   "imageUrl": "KIWI.jpg",
   "imageData": "empty",
   "family": "-i"
   }, {"name": "police", "imageUrl": "POLICE.jpg", "imageData": "empty", "family": "-i"}, {
   "name": "machine",
   "imageUrl": "MACHINE.jpg",
   "imageData": "empty",
   "family": "-i"
   }, {"name": "regime", "imageUrl": "REGIME.jpg", "imageData": "empty", "family": "-i"}, {
   "name": "piece",
   "imageUrl": "PIECE.jpg",
   "imageData": "empty",
   "family": "-ie"
   }, {"name": "field", "imageUrl": "FIELD.jpg", "imageData": "empty", "family": "-ie"}, {
   "name": "believe",
   "imageUrl": "BELIEVE.jpg",
   "imageData": "empty",
   "family": "-ie"
   }, {"name": "chief", "imageUrl": "CHIEF.jpg", "imageData": "empty", "family": "-ie"}, {
   "name": "brief",
   "imageUrl": "BRIEF.jpg",
   "imageData": "empty",
   "family": "-ie"
   }, {"name": "thief", "imageUrl": "THIEF.jpg", "imageData": "empty", "family": "-ie"}, {
   "name": "receive",
   "imageUrl": "RECEIVE.jpg",
   "imageData": "empty",
   "family": "-ei"
   }, {"name": "conceive", "imageUrl": "CONCEIVE.jpg", "imageData": "empty", "family": "-ei"}, {
   "name": "perceive",
   "imageUrl": "PERCEIVE.jpg",
   "imageData": "empty",
   "family": "-ei"
   }, {"name": "ceiling", "imageUrl": "CEILING.jpg", "imageData": "empty", "family": "-ei"}, {
   "name": "ice",
   "imageUrl": "ICE.jpg",
   "imageData": "empty",
   "family": "-ice"
   }, {"name": "nice", "imageUrl": "NICE.jpg", "imageData": "empty", "family": "-ice"}, {
   "name": "mice",
   "imageUrl": "MICE.jpg",
   "imageData": "empty",
   "family": "-ice"
   }, {"name": "dice", "imageUrl": "DICE.jpg", "imageData": "empty", "family": "-ice"}, {
   "name": "rice",
   "imageUrl": "RICE.jpg",
   "imageData": "empty",
   "family": "-ice"
   }, {"name": "slice", "imageUrl": "SLICE.jpg", "imageData": "empty", "family": "-ice"}, {
   "name": "spice",
   "imageUrl": "SPICE.jpg",
   "imageData": "empty",
   "family": "-ice"
   }, {"name": "twice", "imageUrl": "TWICE.jpg", "imageData": "empty", "family": "-ice"}, {
   "name": "hide",
   "imageUrl": "HIDE.jpg",
   "imageData": "empty",
   "family": "-ide"
   }, {"name": "ride", "imageUrl": "RIDE.jpg", "imageData": "empty", "family": "-ide"}, {
   "name": "slide",
   "imageUrl": "SLIDE.jpg",
   "imageData": "empty",
   "family": "-ide"
   }, {"name": "side", "imageUrl": "SIDE.jpg", "imageData": "empty", "family": "-ide"}, {
   "name": "wide",
   "imageUrl": "WIDE.jpg",
   "imageData": "empty",
   "family": "-ide"
   }, {"name": "bride", "imageUrl": "BRIDE.jpg", "imageData": "empty", "family": "-ide"}, {
   "name": "like",
   "imageUrl": "LIKE.jpg",
   "imageData": "empty",
   "family": "-ike"
   }, {"name": "pike", "imageUrl": "PIKE.jpg", "imageData": "empty", "family": "-ike"}, {
   "name": "hike",
   "imageUrl": "HIKE.jpg",
   "imageData": "empty",
   "family": "-ike"
   }, {"name": "brike", "imageUrl": "BRIKE.jpg", "imageData": "empty", "family": "-ike"}, {
   "name": "mike",
   "imageUrl": "MIKE.jpg",
   "imageData": "empty",
   "family": "-ike"
   }, {"name": "trike", "imageUrl": "TRIKE.jpg", "imageData": "empty", "family": "-ike"}, {
   "name": "dime",
   "imageUrl": "DIME.jpg",
   "imageData": "empty",
   "family": "-ime"
   }, {"name": "lime", "imageUrl": "LIME.jpg", "imageData": "empty", "family": "-ime"}, {
   "name": "mime",
   "imageUrl": "MIME.jpg",
   "imageData": "empty",
   "family": "-ime"
   }, {"name": "time", "imageUrl": "TIME.jpg", "imageData": "empty", "family": "-ime"}, {
   "name": "rime",
   "imageUrl": "RIME.jpg",
   "imageData": "empty",
   "family": "-ime"
   }, {"name": "prime", "imageUrl": "PRIME.jpg", "imageData": "empty", "family": "-ime"}, {
   "name": "fine",
   "imageUrl": "FINE.jpg",
   "imageData": "empty",
   "family": "-ine"
   }, {"name": "line", "imageUrl": "LINE.jpg", "imageData": "empty", "family": "-ine"}, {
   "name": "mine",
   "imageUrl": "MINE.jpg",
   "imageData": "empty",
   "family": "-ine"
   }, {"name": "nine", "imageUrl": "NINE.jpg", "imageData": "empty", "family": "-ine"}, {
   "name": "pine",
   "imageUrl": "PINE.jpg",
   "imageData": "empty",
   "family": "-ine"
   }, {"name": "wine", "imageUrl": "WINE.jpg", "imageData": "empty", "family": "-ine"}, {
   "name": "five",
   "imageUrl": "FIVE.jpg",
   "imageData": "empty",
   "family": "-ive"
   }, {"name": "dive", "imageUrl": "DIVE.jpg", "imageData": "empty", "family": "-ive"}, {
   "name": "rive",
   "imageUrl": "RIVE.jpg",
   "imageData": "empty",
   "family": "-ive"
   }, {"name": "drive", "imageUrl": "DRIVE.jpg", "imageData": "empty", "family": "-ive"}, {
   "name": "hive",
   "imageUrl": "HIVE.jpg",
   "imageData": "empty",
   "family": "-ive"
   }, {"name": "jive", "imageUrl": "JIVE.jpg", "imageData": "empty", "family": "-ive"}, {
   "name": "mild",
   "imageUrl": "MILD.jpg",
   "imageData": "empty",
   "family": "-ild"
   }, {"name": "wild", "imageUrl": "WILD.jpg", "imageData": "empty", "family": "-ild"}, {
   "name": "child",
   "imageUrl": "CHILD.jpg",
   "imageData": "empty",
   "family": "-ild"
   }, {"name": "kind", "imageUrl": "KIND.jpg", "imageData": "empty", "family": "-ind"}, {
   "name": "bind",
   "imageUrl": "BIND.jpg",
   "imageData": "empty",
   "family": "-ind"
   }, {"name": "blind", "imageUrl": "BLIND.jpg", "imageData": "empty", "family": "-ind"}, {
   "name": "find",
   "imageUrl": "FIND.jpg",
   "imageData": "empty",
   "family": "-ind"
   }, {"name": "mind", "imageUrl": "MIND.jpg", "imageData": "empty", "family": "-ind"}, {
   "name": "remind",
   "imageUrl": "REMIND.jpg",
   "imageData": "empty",
   "family": "-ind"
   }, {"name": "light", "imageUrl": "LIGHT.jpg", "imageData": "empty", "family": "-igh-"}, {
   "name": "flight",
   "imageUrl": "FLIGHT.jpg",
   "imageData": "empty",
   "family": "-igh-"
   }, {"name": "night", "imageUrl": "NIGHT.jpg", "imageData": "empty", "family": "-igh-"}, {
   "name": "sight",
   "imageUrl": "SIGHT.jpg",
   "imageData": "empty",
   "family": "-igh-"
   }, {"name": "right", "imageUrl": "RIGHT.jpg", "imageData": "empty", "family": "-igh-"}, {
   "name": "bright",
   "imageUrl": "BRIGHT.jpg",
   "imageData": "empty",
   "family": "-igh-"
   }, {"name": "high", "imageUrl": "HIGH.jpg", "imageData": "empty", "family": "-igh-"}, {
   "name": "sigh",
   "imageUrl": "SIGH.jpg",
   "imageData": "empty",
   "family": "-igh-"
   }, {"name": "kite", "imageUrl": "KITE.jpg", "imageData": "empty", "family": "-i-e"}, {
   "name": "site",
   "imageUrl": "SITE.jpg",
   "imageData": "empty",
   "family": "-i-e"
   }, {"name": "write", "imageUrl": "WRITE.jpg", "imageData": "empty", "family": "-i-e"}, {
   "name": "white",
   "imageUrl": "WHITE.jpg",
   "imageData": "empty",
   "family": "-i-e"
   }, {"name": "life", "imageUrl": "LIFE.jpg", "imageData": "empty", "family": "-i-e"}, {
   "name": "wife",
   "imageUrl": "WIFE.jpg",
   "imageData": "empty",
   "family": "-i-e"
   }, {"name": "pile", "imageUrl": "PILE.jpg", "imageData": "empty", "family": "-i-e"}, {
   "name": "smile",
   "imageUrl": "SMILE.jpg",
   "imageData": "empty",
   "family": "-i-e"
   }, {"name": "tiger", "imageUrl": "TIGER.jpg", "imageData": "empty", "family": "-i"}, {
   "name": "spider",
   "imageUrl": "SPIDER.jpg",
   "imageData": "empty",
   "family": "-i"
   }, {"name": "rhino", "imageUrl": "RHINO.jpg", "imageData": "empty", "family": "-i"}, {
   "name": "lion",
   "imageUrl": "LION.jpg",
   "imageData": "empty",
   "family": "-i"
   }, {"name": "climate", "imageUrl": "CLIMATE.jpg", "imageData": "empty", "family": "-i"}, {
   "name": "friday",
   "imageUrl": "FRIDAY.jpg",
   "imageData": "empty",
   "family": "-i"
   },  {
   "name": "iceberg",
   "imageUrl": "ICEBERG.jpg",
   "imageData": "empty",
   "family": "-i"
   }, {"name": "icicle", "imageUrl": "ICICLE.jpg", "imageData": "empty", "family": "-i"}, {
   "name": "ivy",
   "imageUrl": "IVY.jpg",
   "imageData": "empty",
   "family": "-i"
   }, {"name": "island", "imageUrl": "ISLAND.jpg", "imageData": "empty", "family": "-i"}, {
   "name": "iris",
   "imageUrl": "IRIS.jpg",
   "imageData": "empty",
   "family": "-i"
   }, {"name": "iron", "imageUrl": "IRON.jpg", "imageData": "empty", "family": "-i"}, {
   "name": "idea",
   "imageUrl": "IDEA.jpg",
   "imageData": "empty",
   "family": "-i"
   }, {"name": "my", "imageUrl": "MY.jpg", "imageData": "empty", "family": "-y"}, {
   "name": "sky",
   "imageUrl": "SKY.jpg",
   "imageData": "empty",
   "family": "-y"
   }, {"name": "dry", "imageUrl": "DRY.jpg", "imageData": "empty", "family": "-y"}, {
   "name": "cry",
   "imageUrl": "CRY.jpg",
   "imageData": "empty",
   "family": "-y"
   }, {"name": "try", "imageUrl": "TRY.jpg", "imageData": "empty", "family": "-y"}, {
   "name": "why",
   "imageUrl": "WHY.jpg",
   "imageData": "empty",
   "family": "-y"
   }, {"name": "reply", "imageUrl": "REPLY.jpg", "imageData": "empty", "family": "-y"},
   {"name": "type", "imageUrl": "TYPE.jpg", "imageData": "empty", "family": "-y"}, {
   "name": "nylon",
   "imageUrl": "NYLON.jpg",
   "imageData": "empty",
   "family": "-y"
   }, {"name": "style", "imageUrl": "STYLE.jpg", "imageData": "empty", "family": "-y"}, {
   "name": "cypress",
   "imageUrl": "CYPRESS.jpg",
   "imageData": "empty",
   "family": "-y"
   }, {"name": "cycle", "imageUrl": "CYCLE.jpg", "imageData": "empty", "family": "-y"}, {
   "name": "motor-cycle",
   "imageUrl": "MOTOR-CYCLE.jpg",
   "imageData": "empty",
   "family": "-y"
   }, {"name": "pie", "imageUrl": "PIE.jpg", "imageData": "empty", "family": "-ie"}, {
   "name": "lie",
   "imageUrl": "LIE.jpg",
   "imageData": "empty",
   "family": "-ie"
   }, {"name": "die", "imageUrl": "DIE.jpg", "imageData": "empty", "family": "-ie"}, {
   "name": "tie",
   "imageUrl": "TIE.jpg",
   "imageData": "empty",
   "family": "-ie"
   }, {"name": "untie", "imageUrl": "UNTIE.jpg", "imageData": "empty", "family": "-ie"}, {
   "name": "magpie",
   "imageUrl": "MAGPIE.jpg",
   "imageData": "empty",
   "family": "-ie"
   }, {"name": "guide", "imageUrl": "GUIDE.jpg", "imageData": "empty", "family": "-ui"}, {
   "name": "quite",
   "imageUrl": "QUITE.jpg",
   "imageData": "empty",
   "family": "-ui"
   }, {"name": "no", "imageUrl": "NO.jpg", "imageData": "empty", "family": "-o"}, {
   "name": "go",
   "imageUrl": "GO.jpg",
   "imageData": "empty",
   "family": "-o"
   }, {"name": "so", "imageUrl": "SO.jpg", "imageData": "empty", "family": "-o"}, {
   "name": "tomato",
   "imageUrl": "TOMATO.jpg",
   "imageData": "empty",
   "family": "-o"
   }, {"name": "potato", "imageUrl": "POTATO.jpg", "imageData": "empty", "family": "-o"}, {
   "name": "hippo",
   "imageUrl": "HIPPO.jpg",
   "imageData": "empty",
   "family": "-o"
   }, {"name": "open", "imageUrl": "OPEN.jpg", "imageData": "empty", "family": "-o"}, {
   "name": "ocean",
   "imageUrl": "OCEAN.jpg",
   "imageData": "empty",
   "family": "-o"
   }, {"name": "sofa", "imageUrl": "SOFA.jpg", "imageData": "empty", "family": "-o"}, {
   "name": "coconut",
   "imageUrl": "COCONUT.jpg",
   "imageData": "empty",
   "family": "-o"
   }, {"name": "hotel", "imageUrl": "HOTEL.jpg", "imageData": "empty", "family": "-o"}, {
   "name": "october",
   "imageUrl": "OCTOBER.jpg",
   "imageData": "empty",
   "family": "-o"
   }, {"name": "hole", "imageUrl": "HOLE.jpg", "imageData": "empty", "family": "-o-e"}, {
   "name": "mole",
   "imageUrl": "MOLE.jpg",
   "imageData": "empty",
   "family": "-o-e"
   }, {"name": "pole", "imageUrl": "POLE.jpg", "imageData": "empty", "family": "-o-e"}, {
   "name": "bone",
   "imageUrl": "BONE.jpg",
   "imageData": "empty",
   "family": "-o-e"
   }, {"name": "cone", "imageUrl": "CONE.jpg", "imageData": "empty", "family": "-o-e"}, {
   "name": "stone",
   "imageUrl": "STONE.jpg",
   "imageData": "empty",
   "family": "-o-e"
   }, {"name": "rose", "imageUrl": "ROSE.jpg", "imageData": "empty", "family": "-o-e"}, {
   "name": "nose",
   "imageUrl": "NOSE.jpg",
   "imageData": "empty",
   "family": "-o-e"
   }, {"name": "bow", "imageUrl": "BOW.jpg", "imageData": "empty", "family": "-ow"}, {
   "name": "low",
   "imageUrl": "LOW.jpg",
   "imageData": "empty",
   "family": "-ow"
   }, {"name": "slow", "imageUrl": "SLOW.jpg", "imageData": "empty", "family": "-ow"}, {
   "name": "row",
   "imageUrl": "ROW.jpg",
   "imageData": "empty",
   "family": "-ow"
   }, {"name": "bowl", "imageUrl": "BOWL.jpg", "imageData": "empty", "family": "-ow"}, {
   "name": "fowl",
   "imageUrl": "FOWL.jpg",
   "imageData": "empty",
   "family": "-ow"
   }, {"name": "snow", "imageUrl": "SNOW.jpg", "imageData": "empty", "family": "-ow"}, {
   "name": "grow",
   "imageUrl": "GROW.jpg",
   "imageData": "empty",
   "family": "-ow"
   }, {"name": "boat", "imageUrl": "BOAT.jpg", "imageData": "empty", "family": "-oa"}, {
   "name": "coat",
   "imageUrl": "COAT.jpg",
   "imageData": "empty",
   "family": "-oa"
   }, {"name": "goat", "imageUrl": "GOAT.jpg", "imageData": "empty", "family": "-oa"}, {
   "name": "road",
   "imageUrl": "ROAD.jpg",
   "imageData": "empty",
   "family": "-oa"
   }, {"name": "oak", "imageUrl": "OAK.jpg", "imageData": "empty", "family": "-oa"}, {
   "name": "soap",
   "imageUrl": "SOAP.jpg",
   "imageData": "empty",
   "family": "-oa"
   }, {"name": "coal", "imageUrl": "COAL.jpg", "imageData": "empty", "family": "-oa"}, {
   "name": "goal",
   "imageUrl": "GOAL.jpg",
   "imageData": "empty",
   "family": "-oa"
   }, {"name": "soul", "imageUrl": "SOUL.jpg", "imageData": "empty", "family": "-ou"}, {
   "name": "shoulder",
   "imageUrl": "SHOULDER.jpg",
   "imageData": "empty",
   "family": "-ou"
   }, {"name": "though", "imageUrl": "THOUGH.jpg", "imageData": "empty", "family": "-ou"}, {
   "name": "although",
   "imageUrl": "ALTHOUGH.jpg",
   "imageData": "empty",
   "family": "-ou"
   }, {"name": "doe", "imageUrl": "DOE.jpg", "imageData": "empty", "family": "-oe"}, {
   "name": "foe",
   "imageUrl": "FOE.jpg",
   "imageData": "empty",
   "family": "-oe"
   }, {"name": "toe", "imageUrl": "TOE.jpg", "imageData": "empty", "family": "-oe"}, {
   "name": "joe",
   "imageUrl": "JOE.jpg",
   "imageData": "empty",
   "family": "-oe"
   }, {"name": "bold", "imageUrl": "BOLD.jpg", "imageData": "empty", "family": "-old"}, {
   "name": "cold",
   "imageUrl": "COLD.jpg",
   "imageData": "empty",
   "family": "-old"
   }, {"name": "told", "imageUrl": "TOLD.jpg", "imageData": "empty", "family": "-old"}, {
   "name": "sold",
   "imageUrl": "SOLD.jpg",
   "imageData": "empty",
   "family": "-old"
   }, {"name": "fold", "imageUrl": "FOLD.jpg", "imageData": "empty", "family": "-old"}, {
   "name": "folder",
   "imageUrl": "FOLDER.jpg",
   "imageData": "empty",
   "family": "-old"
   }, {"name": "music", "imageUrl": "MUSIC.jpg", "imageData": "empty", "family": "-u"}, {
   "name": "pupil",
   "imageUrl": "PUPIL.jpg",
   "imageData": "empty",
   "family": "-u"
   }, {"name": "duty", "imageUrl": "DUTY.jpg", "imageData": "empty", "family": "-u"}, {
   "name": "tube",
   "imageUrl": "TUBE.jpg",
   "imageData": "empty",
   "family": "-u"
   }, {"name": "unit", "imageUrl": "UNIT.jpg", "imageData": "empty", "family": "-u"}, {
   "name": "use",
   "imageUrl": "USE.jpg",
   "imageData": "empty",
   "family": "-u"
   }, {"name": "cute", "imageUrl": "CUTE.jpg", "imageData": "empty", "family": "-u"}, {
   "name": "mute",
   "imageUrl": "MUTE.jpg",
   "imageData": "empty",
   "family": "-u"
   }, {"name": "suit", "imageUrl": "SUIT.jpg", "imageData": "empty", "family": "-ui ie eau"}, {
   "name": "view",
   "imageUrl": "VIEW.jpg",
   "imageData": "empty",
   "family": "-ui ie eau"
   }, {"name": "beauty", "imageUrl": "BEAUTY.jpg", "imageData": "empty", "family": "-ui ie eau"}, {
   "name": "beautiful",
   "imageUrl": "BEAUTIFUL.jpg",
   "imageData": "empty",
   "family": "-ui ie eau"
   }, {"name": "sue", "imageUrl": "SUE.jpg", "imageData": "empty", "family": "-ue"}, {
   "name": "cue",
   "imageUrl": "CUE.jpg",
   "imageData": "empty",
   "family": "-ue"
   }, {"name": "value", "imageUrl": "VALUE.jpg", "imageData": "empty", "family": "-ue"}, {
   "name": "issue",
   "imageUrl": "ISSUE.jpg",
   "imageData": "empty",
   "family": "-ue"
   }, {"name": "argue", "imageUrl": "ARGUE.jpg", "imageData": "empty", "family": "-ue"}, {
   "name": "continue",
   "imageUrl": "CONTINUE.jpg",
   "imageData": "empty",
   "family": "-ue"
   }, {"name": "dew", "imageUrl": "DEW.jpg", "imageData": "empty", "family": "-ew"}, {
   "name": "few",
   "imageUrl": "FEW.jpg",
   "imageData": "empty",
   "family": "-ew"
   }, {"name": "new", "imageUrl": "NEW.jpg", "imageData": "empty", "family": "-ew"}, {
   "name": "knew",
   "imageUrl": "KNEW.jpg",
   "imageData": "empty",
   "family": "-ew"
   }, {"name": "stew", "imageUrl": "STEW.jpg", "imageData": "empty", "family": "-ew"}, {
   "name": "nephew",
   "imageUrl": "NEPHEW.jpg",
   "imageData": "empty",
   "family": "-ew"
   }, {"name": "room", "imageUrl": "ROOM.jpg", "imageData": "empty", "family": "-oo"}, {
   "name": "moon",
   "imageUrl": "MOON.jpg",
   "imageData": "empty",
   "family": "-oo"
   }, {"name": "spoon", "imageUrl": "SPOON.jpg", "imageData": "empty", "family": "-oo"}, {
   "name": "balloon",
   "imageUrl": "BALLOON.jpg",
   "imageData": "empty",
   "family": "-oo"
   }, {"name": "food", "imageUrl": "FOOD.jpg", "imageData": "empty", "family": "-oo"}, {
   "name": "goose",
   "imageUrl": "GOOSE.jpg",
   "imageData": "empty",
   "family": "-oo"
   }, {"name": "school", "imageUrl": "SCHOOL.jpg", "imageData": "empty", "family": "-oo"}, {
   "name": "tooth",
   "imageUrl": "TOOTH.jpg",
   "imageData": "empty",
   "family": "-oo"
   }, {"name": "too", "imageUrl": "TOO.jpg", "imageData": "empty", "family": "-oo"}, {
   "name": "zoo",
   "imageUrl": "ZOO.jpg",
   "imageData": "empty",
   "family": "-oo"
   }, {"name": "cuckoo", "imageUrl": "CUCKOO.jpg", "imageData": "empty", "family": "-oo"}, {
   "name": "bamboo",
   "imageUrl": "BAMBOO.jpg",
   "imageData": "empty",
   "family": "-oo"
   }, {"name": "shampoo", "imageUrl": "SHAMPOO.jpg", "imageData": "empty", "family": "-oo"}, {
   "name": "kangaroo",
   "imageUrl": "KANGAROO.jpg",
   "imageData": "empty",
   "family": "-oo"
   }, {"name": "do", "imageUrl": "DO.jpg", "imageData": "empty", "family": "-o"}, {
   "name": "to",
   "imageUrl": "TO.jpg",
   "imageData": "empty",
   "family": "-o"
   }, {"name": "two", "imageUrl": "TWO.jpg", "imageData": "empty", "family": "-o"}, {
   "name": "who",
   "imageUrl": "WHO.jpg",
   "imageData": "empty",
   "family": "-o"
   }, {"name": "lose", "imageUrl": "LOSE.jpg", "imageData": "empty", "family": "-o"}, {
   "name": "prove",
   "imageUrl": "PROVE.jpg",
   "imageData": "empty",
   "family": "-o"
   }, {"name": "move", "imageUrl": "MOVE.jpg", "imageData": "empty", "family": "-o"}, {
   "name": "movie",
   "imageUrl": "MOVIE.jpg",
   "imageData": "empty",
   "family": "-o"
   }, {"name": "rule", "imageUrl": "RULE.jpg", "imageData": "empty", "family": "-u"}, {
   "name": "flute",
   "imageUrl": "FLUTE.jpg",
   "imageData": "empty",
   "family": "-u"
   }, {"name": "june", "imageUrl": "JUNE.jpg", "imageData": "empty", "family": "-u"}, {
   "name": "july",
   "imageUrl": "JULY.jpg",
   "imageData": "empty",
   "family": "-u"
   }, {"name": "crew", "imageUrl": "CREW.jpg", "imageData": "empty", "family": "-ew"}, {
   "name": "drew",
   "imageUrl": "DREW.jpg",
   "imageData": "empty",
   "family": "-ew"
   }, {"name": "grew", "imageUrl": "GREW.jpg", "imageData": "empty", "family": "-ew"}, {
   "name": "threw",
   "imageUrl": "THREW.jpg",
   "imageData": "empty",
   "family": "-ew"
   }, {"name": "blew", "imageUrl": "BLEW.jpg", "imageData": "empty", "family": "-ew"}, {
   "name": "flew",
   "imageUrl": "FLEW.jpg",
   "imageData": "empty",
   "family": "-ew"
   }, {"name": "blue", "imageUrl": "BLUE.jpg", "imageData": "empty", "family": "-ue"}, {
   "name": "glue",
   "imageUrl": "GLUE.jpg",
   "imageData": "empty",
   "family": "-ue"
   }, {"name": "true", "imageUrl": "TRUE.jpg", "imageData": "empty", "family": "-ue"}, {
   "name": "statue",
   "imageUrl": "STATUE.jpg",
   "imageData": "empty",
   "family": "-ue"
   }, {"name": "soup", "imageUrl": "SOUP.jpg", "imageData": "empty", "family": "-ou oe"}, {
   "name": "rouble",
   "imageUrl": "ROUBLE.jpg",
   "imageData": "empty",
   "family": "-ou oe"
   }, {"name": "group", "imageUrl": "GROUP.jpg", "imageData": "empty", "family": "-ou oe"}, {
   "name": "shoe",
   "imageUrl": "SHOE.jpg",
   "imageData": "empty",
   "family": "-ou oe"
   }, {"name": "fruit", "imageUrl": "FRUIT.jpg", "imageData": "empty", "family": "-ui"}, {
   "name": "juice",
   "imageUrl": "JUICE.jpg",
   "imageData": "empty",
   "family": "-ui"
   }]
   console.log(phonicimages.length);
   for (var i = 0; i < phonicimages.length; i++) {
   var imageUrl = phonicimages[i].imageUrl.toLowerCase();
   console.log(imageUrl)

   phonicimages[i].imageData = base64_encode('../../learnkids/src/assets/img/'+imageUrl);
   console.log(phonicimages[i].imageData);

   var familyList = new phonicList({
   name: phonicimages[i].name,
   imageUrl: imageUrl,
   imageData: phonicimages[i].imageData,
   family: phonicimages[i].family
   });

   familyList.save(function (err, res) {
   if (err) {
   console.log(err);
   } else {
   // console.log(res);
   }

   });

   }
   });*/
//////////////////////////////////////////////////
  api.get('/totalData', function (req, res) {
    phonicList.find({}, function (err, result) {
      if (err) {
        console.log(err);
      } else {
        fs.writeFile('appData.json', result, function (err) {
          if (err) return console.log(err);
          console.log('Hello World > helloworld.txt');
        });
        res.json({success: "true", key: "", familyList: result});
      }

    });
  });

  api.get('/totalFamily', function (req, res) {
    phonicList.find({'imageData': {$ne: "empty"}}).distinct('family', function (err, result) {
      if (err) {
        console.log(err);
      } else {
        res.json({success: "true", key: "", familyList: result});
      }

    });
  });
  api.post('/familyImages', function (req, res) {
    console.log(req.body);
    phonicList.find({
      family: req.body.family,
      'imageData': {$ne: "empty"}
    }).select('name family').exec(function (err, result) {
      if (err) {
        console.log(err);
      } else {
        res.json({success: "true", key: "", wordNames: result})
      }
    })
  })
  api.post('/phonicImages', function (req, res) {
    console.log(req.body);
    phonicList.find({
      family: req.body.family,
      'imageData': {$ne: "empty"}
    }).select('name imageData family').exec(function (err, result) {
      if (err) {
        console.log(err);
      } else {
        res.json({success: "true", key: "", phonicImages: result})
      }
    })
  })

  return api;
};
