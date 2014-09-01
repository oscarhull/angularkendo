(function () {
    'use strict';
    // Controller name is handy for logging
    var controllerId = 'gridTest';

    // Define the controller on the module.
    // Inject the dependencies. 
    // Point to the controller definition function.
    angular.module('AngularKendoTest').controller(controllerId,[ gridTest]);

    function gridTest() {
        // Using 'Controller As' syntax, so we assign this to the vm variable (for viewmodel).
        var vm = this;
        var dataSource = new kendo.data.DataSource({
            data: [
                { FirstName: "Foo", LastName:"LastFoo", Country: "CountryFoo", City: "CityFoo", Title: "TitleFoo", Id: 1 },
                { FirstName: "Bar", LastName:"LastBar", Country: "CountryBar", City: "CityBar", Title: "TitleBar", Id: 2 },
                { FirstName: "Baz", LastName:"LastBaz", Country: "CountryBaz", City: "CityBaz", Title: "TitleBaz", Id: 3 }
            ]
            });

        dataSource.pageSize(2);
        vm.gridOptions = {
            dataSource: dataSource,
            sortable: true,
            pageable: true,
            filterable: true,
            editable: "inline",
            save: function(e){
                var array = $.map(this.dataSource.data(), function (item, i) {
                    return {
                        Id: item.Id,
                        FirstName: item.FirstName,
                        LastName: item.LastName,
                        Country: item.Country,
                        City: item.City,
                        Title: item.Title
                    };

                });
                //_datasourceGrid = array;
                this.dataSource.data(array);
                this.refresh();
            },
            edit: function (e) {
                var commandCell = e.container.find("td:last"); //find the command column
                commandCell.html('<a id="btnActualizar" class="k-button k-button-icontext k-grid-update" href="#"><span class="k-icon k-update" title="Actualizar"></span></a><a id="btnCancelar" class="k-button k-button-icontext k-grid-cancel" href="#"><span class="k-icon k-cancel" title="Cancelar"></span></a>');
            },
            toolbar: ["create"],
            columns: [{
                field: "Id",
                title: "Id",
                width: "80px"
                },{
                field: "FirstName",
                title: "First Name",
                width: "120px"
                },{
                field: "LastName",
                title: "Last Name",
                width: "120px"
                },{
                field: "Country",
                width: "120px"
                },{
                field: "City",
                width: "120px"
                },{
                field: "Title"
            },{
                command: [
                    {name: "edit", text: "", width:"50px"}, 
                    {name: "destroy", text: "", width:"50px" }
                ], 
                title: "Opcion", 
                field: "Opcion", 
                width: "260px"
            }]
        };
        activate();
        
        function activate(){}
    
    }
})();
