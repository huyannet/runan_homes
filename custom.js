/* Write here your custom javascript codes */
function changeLocation(location) {
    $.get("/getDistrict?location=" + location + "&cDistrict=" + cDistrict, function (data) {
        $("#QuanHuyenIDValue").html(data);
    });
}

jQuery(document).ready(function () {
    //Search
    $("#fulltextSearch").submit(function () {
        var quanHuyenValue = $("#QuanHuyenIDValue").val();
        var tinhThanhValue = $("#TinhThanhIDValue").val();
        if (quanHuyenValue != null && quanHuyenValue != '') {
            $("#location").val(quanHuyenValue);
        } else {
            $("#location").val(tinhThanhValue);
        }
        return true;
    });

    $(document).ready(function () {
        $("#TinhThanhIDValue").change();
    });
});