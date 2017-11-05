$(document).ready(function () {
    var nameOfSubjects;
    var semesterName;
    $('.subjectsHeader').on('click', '.subjectHeaderElement', function () {
        var subjectName = $(this).attr('subjectName');
        nameOfSubjects = subjectName;
        var url = $(location);
        var stringToSend;
        var n = url[0].pathname.search('/semester');
        if(n>=0) {
            stringToSend = url[0].pathname.substr(n+1, n+10);
            semesterName = stringToSend;
        }
        $.ajax({
            url: '/loadExperiments',
            type: 'GET',
            data: {
                subjectName: subjectName,
                semester: stringToSend
            },
            success: function (data) {
                if(data.length == 0) {
                    $('.experimentListContainer').text('');
                    $('.experimentListContainer').append(
                        $('<div></div>', {
                            'text':'no file in this folder yet',
                            'class': 'alert alert-danger'
                        })
                    )
                } else {
                    $('.experimentListContainer').text('');
                    for(var i = 0 ; i < data.length ; i++ ) {
                        $('.experimentListContainer').append(
                            $('<div></div>', {
                                'text': data[i],
                                'class': 'alert alert-info file',
                                'fileName': data[i]
                            }).append(
                                $('<div></div>', {
                                    'text': 'download',
                                    'class': 'downloadLink',
                                    'fileName': data[i]
                                })
                            )
                        )
                    }
                }
            }
        });
    });
    $('.experimentListContainer').on('click', '.file > .downloadLink', function () {
        var fileName = $(this).attr('fileName');
        url = `/files/${semesterName}/${nameOfSubjects}/${fileName}`;

        window.open(url, '_blank');
    });
});
