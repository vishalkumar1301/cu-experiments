$(document).ready(function () {
    var url = $(location);
    var stringToSend;
    var n = url[0].pathname.search('/semester');
    if(n>=0) {
        stringToSend = url[0].pathname.substr(n+1, n+10);
        $.ajax({
            url: '/loadSemesterSubjects',
            type: 'GET',
            data: {
                semester: stringToSend
            },
            success: function (data) {
                for( var i = 0 ; i < data.length ; i++ ) {
                    $('#subjectsHeader').append(
                        $('<div></div>', {
                            'text': data[i],
                            'class': 'subjectHeaderElement add-margin-right-high',
                            'subjectName': data[i]
                        })
                    );
                }
            }
        });
    }




});
