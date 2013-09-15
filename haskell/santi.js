
$(document).ready(function(){

  $('.editable').addClass('readonly');
  $('.editable input[type!="radio"], .editable textarea').attr('readonly', 'readonly').val('');
  $('.editable input[type="radio"]').removeAttr('checked');
  $('.cancelbutton, .okbutton, #del').attr('disabled', 'disabled');
  $('.invalidMessage').addClass('show');

  var switchTo = {
    currentPage : 0,
    pages : [
      function() {
        switchTo.currentPage = 0;
        $('#prev').hide();
        $('#next').show();
        $('#send').hide();
        $('div.page').hide();
        $('div.page#intro').show();
      },
      function() {
        switchTo.currentPage = 1;
        validateAll();
        $('#prev').show();
        $('#next').show();
        $('#send').hide();
        $('div.page').hide();
        $('div.page#form').show();
      },
      function() {
        switchTo.currentPage = 2;
        $('#prev').show();
        $('#next').hide();
        $('#send').show();
        $('div.page').hide();
        $('div.page#table').show();
      }
    ],
    pageNo : function(no) {
      switchTo.pages[no]();
    },
    prev : function() {
      switchTo.pages[(--switchTo.currentPage + switchTo.pages.length) % switchTo.pages.length]();
    },
    next : function() {
      switchTo.pages[++switchTo.currentPage % switchTo.pages.length]();
    },
    success : function() {
      $('#prev').hide();
      $('#next').hide();
      $('#send').hide();
      $('div.page').hide();
      $('div.page#success').show();
    },
    error : function() {
      $('#prev').show();
      $('#next').hide();
      $('#send').hide();
      $('div.page').hide();
      $('div.page#error').show();
    }
  };

  $("#next").click(function(event){
    event.preventDefault();
    switchTo.next();
  });
  $("#prev").click(function(event){
    event.preventDefault();
    switchTo.prev();
  });

  function getChildren() {
    var ret = [];
    $('#list-children tbody tr').each(function() {
      var tmp = {};
      $(this).children('td').each(function() {
        tmp[$(this).attr('class')] = $(this).text();
      });
      ret.push(tmp);
    });
    return ret;
  }

  function getChildrenHS() {
    var ret = [];
    $('#list-children tbody tr').each(function() {
      var tmp = [];
      $(this).children('td').each(function() {
        var key = $(this).attr('class');
	tmp.push(key + "=" + "\"" + $(this).text() + "\"");
      });
      ret.push("{" + tmp.join(",") + "}");
    });
    return ret;
  }

  function initInput() {
    var json = #{reg};
    if (json) {
      for (var key in json) {
        if (key.indexOf("children") == 0) {
          var children = json[key];
          for (var i = 0; i < children.length; ++i) {
            var child = children[i];
            var html = [];
            html.push('<tr class="lastInserted">');
            for (var childkey in child) {
              html.push('<td class="');
              html.push(childkey);
              html.push('">');
              html.push(child[childkey]);
              html.push('</td>');
            }
            html.push('</tr>');
            $('#list-children tbody').append(html.join(''));
            $('.lastInserted')
              .click(function(e) {
                if ($('#list-children').attr('disabled')) {
                  return;
                }
                if ($(this).hasClass('selected')) {
                  $('#list-children tr.selected').removeClass('selected');
                } else {
                  $('#list-children tr.selected').removeClass('selected');
                  $(this).addClass('selected');
                  var childIndex = $('#list-children tbody tr').index(e.currentTarget);
                  editChild(childIndex);
                }
              })
              .removeClass('lastInserted');
	  }
        }
        else {
          $('#' + key)
            .val(json[key])
            .parent().parent().find(".invalidMessage").removeClass("show");
        }
      }
      if ($('#zeit').val() != json["zeit"]) {
        $('#zeit').append("<option>" + json["zeit"] + "</option>");
        $('#zeit').val(json["zeit"]);
      }
      switchTo.pageNo(1);
    }
    else {
      switchTo.pageNo(0);
    }
  }

  function getInput() {
    var ret = {};
    $('#form input, #form select, #remarks').each(function() {
      ret[$(this).attr('id')] = $(this).val();
    });
    if (!ret['remarks'])
      ret['remarks'] = "\"\"";
    ret['children'] = getChildrenHS();
    ret['_charset_'] = 'utf-8';
    return ret;
  }

  function validateAll() {
    if (switchTo.currentPage == 1) {
      if ($('.page:eq(1) .invalidMessage.show').length > 0) {
        $('#prev').attr('disabled', 'disabled');
        $('#next').attr('disabled', 'disabled');
      }
      else {
        $('#prev').removeAttr('disabled');
        $('#next').removeAttr('disabled');
      }
    }
    if ($('.page .invalidMessage.show').length > 0 || $('#list-children tbody tr').length == 0)
      $('#send').attr("disabled", "disabled");
    else
      $('#send').removeAttr("disabled");
  }

  function validate(regexp, element) {
    if ($(element).val().match(regexp)) {
      $(element).parent().parent().find(".invalidMessage").removeClass("show");
    }
    else {
      $(element).parent().parent().find(".invalidMessage").addClass("show");
    }
    validateAll();
  }

  function validateSomething(event) {
    validate(/^.../, event.target);
  }

  function validateEmail(event) {
    validate(/^.+@..+\...+/, event.target);
  }

  function validateTime(event) {
    return validate(/[12][0-9][:.][03]0/, event.target);
  }

  $(".validateSomething").blur(validateSomething);

  $(".validateEmail").blur(validateEmail);

  $(".validateTime").change(validateTime);

  $(".validateAnything").blur(validateAll);

  $(".add").click(function(e) {
    $('.editable').removeClass('readonly');
    $('.editable input[type!="radio"], .editable textarea').removeAttr('readonly').val('');
    $('.editable input[type="radio"]').removeAttr('checked');
    $('.cancelbutton, .okbutton').removeAttr('disabled');
    $('#list-children tr.selected').removeClass('selected');
    $('#details-children').removeAttr('modify');
    $('.add, #del, #send').attr('disabled', 'disabled');
    $('#kindname').val("Bitte Name des Kindes eingeben");
  });

  $('#del').click(function(e) {
    var sel = $('tbody tr.selected');
    if (sel.length > 0)
      sel.remove();
    else
      $('tbody tr:last !.editable').remove();
    $('.cancelbutton, .okbutton').attr('disabled', 'disabled');
    $('.editable').addClass('readonly');
    $('.editable input[type!="radio"], .editable textarea').attr('readonly', 'readonly').val('');
    $('.editable input[type="radio"]').removeAttr('checked');
    $('#details-children').removeAttr('modify');
    $('#del').attr('disabled', 'disabled');
    $('.add, #list-children').removeAttr('disabled');
    validateAll();
  });

  /**
   * Edit the childRow-th child
   */
  function editChild(childIndex) {
      var theRow = $('#list-children tbody tr').eq(childIndex);
      $('#kindname').val(theRow.children('td.childname').text());
      $('#kindalter').val(theRow.children('td.childage').text());
      if (theRow.children('td.childmw').text() == "M") {
        $('input[name="kindgeschlecht"][value="M"]').attr('checked', 'checked');
      }
      else {
        $('input[name="kindgeschlecht"][value="W"]').attr('checked', 'checked');
      }
      $('#zuloben').val(theRow.children('td.childpos').text());
      $('#zutadeln').val(theRow.children('td.childneg').text());
      $('#details-children').attr('modify', childIndex);
      $('.cancelbutton, .okbutton').removeAttr('disabled');
      $('.editable').removeClass('readonly');
      $('.editable input, .editable textarea').removeAttr('readonly');
      $('.add, #send, #list-children').attr('disabled', 'disabled');
      $('#del').removeAttr('disabled');
  }

  $('.okbutton').click(function(e) {
    $('.cancelbutton, .okbutton').attr('disabled', 'disabled');
    var modify = $('#details-children').attr('modify');
    var htmlCode = [
      '<tr class="lastInserted"><td class="childname">',
      $('#kindname').val(),
      '</td><td class="childage">',
      $('#kindalter').val(),
      '</td><td class="childmw">',
      $('input[name="kindgeschlecht"]:checked').val(),
      '</td><td class="childpos">',
      $('#zuloben').val(),
      '</td><td class="childneg">',
      $('#zutadeln').val(),
      '</td></tr>'
    ].join('');

    if (!isNaN(modify)) {
        $('#list-children tbody tr').eq(modify).replaceWith(htmlCode);
    } else {
        $('#list-children tbody').append(htmlCode);
    }

    $('.lastInserted')
    .click(function(e) {
      if ($('#list-children').attr('disabled')) {
        return;
      }
      if ($(this).hasClass('selected')) {
        $('#list-children tr.selected').removeClass('selected');
      } else {
        $('#list-children tr.selected').removeClass('selected');
        $(this).addClass('selected');
        var childIndex = $('#list-children tbody tr').index(e.currentTarget);
        editChild(childIndex);
      }
    })
    .removeClass('lastInserted');
    $('.editable').addClass('readonly');
    $('.editable input[type!="radio"], .editable textarea').attr('readonly', 'readonly').val('');
    $('.editable input[type="radio"]').removeAttr('checked');
    $('#details-children').removeAttr('modify');
    $('.add, #list-children').removeAttr('disabled');
    $('#del').attr('disabled', 'disabled');
    validateAll();
    $('#list-children')[0].scrollIntoView(true);
  });

  $('.cancelbutton').click(function(e) {
    $('.cancelbutton, .okbutton').attr('disabled', 'disabled');
    $('.editable').addClass('readonly');
    $('.editable input[type!="radio"], .editable textarea').attr('readonly', 'readonly').val('');
    $('.editable input[type="radio"]').removeAttr('checked');
    $('#details-children').removeAttr('modify');
    $('#list-children tr.selected').removeClass('selected');
    $('.add, #list-children').removeAttr('disabled');
    $('#del').attr('disabled', 'disabled');
    validateAll();
  });

  $('#send').click(function(e) {
    $('#send').attr("disabled", "disabled");
    $.blockUI({ css: { 
      border: 'none', 
      padding: '15px', 
      backgroundColor: '#000', 
      '-webkit-border-radius': '10px', 
      '-moz-border-radius': '10px', 
      opacity: .5, 
      color: '#fff' 
    }, message: "Mails werden versendet (~15 sec)..."
    }); 
    $.post('@{RegR}', getInput(), function(ret) {
    })
    .success(function() { $.unblockUI(); $('#timeconfirm').text($('#zeit').val()); switchTo.success(); })
    .error(function() { $.unblockUI(); switchTo.error(); });
  })

  initInput();
});
