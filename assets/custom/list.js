	< script >
	    $(document).ready(function() {
	        $("#id_prodi").hide();
	        $("#label_prodi").hide();
	        $("#error_prodi").hide();

	        load_prodi();
	    });

	function load_prodi() {
	    $("#id_fakultas").change(function() {
	        var get_fakultas = $("#id_fakultas").val();

	        $.ajax({
	            type: "POST",
	            dataType: "JSON",
	            url: "<?= base_url('process/getdata_prodi'); ?>",
	            data: {
	                id_fakultas: get_fakultas
	            },
	            success: function(data) {
	                console.log(data);
	                var html = '';
	                var i;
	                var nopro = (i - 1);

	                html += '<option value=""> --- Pilih Prodi--- </option>';


	                for (i = 0; i < data.length; i++) {

	                    html += '<option value="' + data[i].id_prodi + '">' + data[i].jenjang + ' - ' + data[i].nama + '</option>';

	                }
	                $('#id_prodi').html(html);
	                $('#id_prodi').show();
	                $('#label_prodi').show();
	                $('#error_prodi').show();
	            }
	        })

	    })
	} <
	/script>