$(document).ready(function() {
    // Sort employees A to Z
    $('#sort-az-btn').on('click', function() {
      var list = $('#employee-list');
      var listItems = list.children('li').get();
      listItems.sort(function(a, b) {
        var textA = $(a).text().toUpperCase();
        var textB = $(b).text().toUpperCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
      });
      $.each(listItems, function(index, listItem) {
        list.append(listItem);
      });
    });

    // Sort employees Z to A
    $('#sort-za-btn').on('click', function() {
      var list = $('#employee-list');
      var listItems = list.children('li').get();
      listItems.sort(function(a, b) {
        var textA = $(a).text().toUpperCase();
        var textB = $(b).text().toUpperCase();
        return (textA > textB) ? -1 : (textA < textB) ? 1 : 0;
      });
      $.each(listItems, function(index, listItem) {
        list.append(listItem);
      });
    });
  });