$(document).ready(function() {
  var zones = ["zone-1", "zone-2", "zone-3", "zone-4"];

  // 1 something to turn zone green
  function turnGreen(element) {
    $(element).css("background-color", "green");
  }

  // 2 something to turn zone red
  function turnRed(element) {
    $(element).css("background-color", "red");
  }

  function turnWhite() {
    $(this).css("background-color", "white");
  }

  // 3 something to check if zone needs to be clicked
  // returns target zone
  function targetZone() {
    return zones[0];
  }

  // 4 something to check if zone next to targetZone
  // returns true if zone next to target zone, false otherwise
  function nextToTargetZone(zoneId) {
    return (
      $(zoneId)
        .next()
        .attr("id") === targetZone() ||
      $(zoneId)
        .prev()
        .attr("id") === targetZone()
    );
  }

  $(".zone").on("mouseenter", function() {
    var zoneId = "#" + $(this).attr("id");
    var nextToTarget = nextToTargetZone(zoneId);
    // debugger;
    if (nextToTarget) {
      turnGreen($(this));
    } else {
      turnRed($(this));
    }
  });

  $(".zone").on("mouseleave", turnWhite);
  $(".zone").click(function() {
    var clickedZoneId = $(this).attr("id");
    var targetZoneId = targetZone();

    if (clickedZoneId === targetZoneId) {
      turnGreen($(this));
      $(this).off("mouseleave");
      zones.shift();
      if (zones.length === 0) {
        console.log("CongratZz");
      }
    }
  });
});
