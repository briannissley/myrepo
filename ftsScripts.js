var ftsConfig = {
    ftsBody: {
        resize: function (element) {
        }
    },
    ftsRefreshButton: {
        build: function () {
            var grids = $('.k-widget.k-grid');
            if (grids.length > 0) {
                for (var i = 0; i < grids.length; i++) {
                    var grid = $(grids[i]);
                    var gridID = grid[0].id;
                    if (gridID !== 'grid_ReportExpiringPassports' &&
                        gridID !== 'grid_ReportFlights' &&
                        gridID !== 'grid_ReportHotelRequests') {
                        var toolbar;
                        var parent = grid.parent();
                        $.each($(parent).siblings(), function (index, value) {
                            if ($(value).hasClass('ftsToolbar')) {
                                toolbar = $(value);
                            }
                        });
                        toolbar.append('<button class="ftsButton ftsButton--refresh" id="refreshButton_'
                            + gridID + '" onclick="fts.refreshButton_Click(this)"></button>');
                    }
                }
            }
            var refreshButtons = $('.ftsButton--refresh');
            for (var n = 0; n < refreshButtons.length; n++) {
                var refreshButton = $(refreshButtons[n]);
                refreshButton.kendoTooltip({
                    position: 'bottom',
                    content: 'Refresh Grid'
                }).data('kendoTooltip');
            }
        }
    },
    ftsExportButton: {
        build: function () {
            var grids = $('.k-widget.k-grid');
            if (grids.length > 0) {
                for (var i = 0; i < grids.length; i++) {
                    var grid = $(grids[i]);
                    var gridID = grid[0].id;

                    if (gridID !== 'grid_ReportExpiringPassports' &&
                        gridID !== 'grid_ReportFlights' &&
                        gridID !== 'grid_ReportHotelRequests') {
                        var toolbar;
                        var parent = grid.parent();
                        $.each($(parent).siblings(), function (index, value) {
                            if ($(value).hasClass('ftsToolbar')) {
                                toolbar = $(value);
                            }
                        });
                        toolbar.append('<button class="ftsButton ftsButton--export" id="exportButton_'
                            + gridID + '" onclick="fts.exportButton_Click(this)"></button>');
                    }
                    //else {
                    //    var reportsToolbar = $('#pagewrapper_Reports > .ftsToolbar > table td:last-of-type')[0];
                    //    reportsToolbar.append('<button class="ftsButton ftsButton--export" id="btn_ReportsExport" onclick="orionButtons.btn_ReportsExport.onClick(this)"></button>');
                    //}
                }
            }
            var exportButtons = $('.ftsButton--export');
            for (var n = 0; n < exportButtons.length; n++) {
                var exportButton = $(exportButtons[n]);
                exportButton.kendoTooltip({
                    position: 'bottom',
                    content: 'Export Grid Data'
                }).data('kendoTooltip');
            }
        }
    },
    ftsButton: {
        build: function () {
            var buttons = $('.ftsButton');
            if (buttons.length > 0) {
                for (var i = 0; i < buttons.length; i++) {
                    var button = $(buttons[i]);
                    var buttonID = button[0].id;
                    button.attr('type', 'button');
                    if (!button.hasClass('ftsButton--refresh') && !button.hasClass('ftsButton--export')) {
                        button.attr('onclick', 'orionButtons.' + buttonID + '.onClick(this)');
                        var rootObject = orionButtons[buttonID];
                        if (rootObject) {
                            if (rootObject.toolTip) {
                                var toolTipText = button.hasClass('ftsButton--refresh')
                                    ? 'Refresh Grid'
                                    : rootObject.toolTip;
                                button.kendoTooltip({
                                    position: 'bottom',
                                    content: toolTipText
                                }).data('kendoTooltip');
                            }
                        }
                    }
                }
            }
            $('.ftsButton--save').append('<span class="k-icon k-i-save"></span>');
            $('.ftsButton--assign').append('<span class="k-icon k-i-plus-circle"></span>');
            $('.ftsButton--create').append('<span class="k-icon k-i-plus"></span>');
            $('.ftsButton--test').append('<span class="k-icon k-i-wrench"></span>');
            $('.ftsButton--submit').append('<span class="k-icon k-i-redo"></span>');
            $('.ftsButton--cancel').append('<span class="k-icon k-i-close"></span>');
            $('.ftsButton--refresh').append('<span class="k-icon k-i-refresh"></span>');
            $('.ftsButton--export').append('<span class="k-icon k-i-bac"></span>');
            $('.ftsButton--edit').append('<span class="k-icon k-i-edit"></span>');
            $('.ftsButton--delete').append('<span class="k-icon k-i-delete"></span>');
            $('.ftsButton--search').append('<span class="k-icon k-i-search"></span>');
            $('.ftsButton--accept').append('<span class="k-icon k-i-track-changes-accept"></span>');
        },
        defaultConfig: {

        },
        resize: function (element) {
        }
    },
    ftsCheckbox: {
        build: function () {
            var allInputs = $('input');
            var allCheckboxes = [];
            $.each(allInputs, function (index, input) {
                var idSplit = input.id.split('_');
                if (idSplit[0] === 'checkbox') {
                    allCheckboxes.push(input);
                }
            });
            $.each(allCheckboxes, function (index, checkbox) {
                $(checkbox).attr('type', 'checkbox');
                $(checkbox).addClass('ftsCheckbox');
                var defaultValue = false;
                if (orionInputs[checkbox.id] !== undefined) {
                    if ('defaultCheckedValue' in orionInputs[checkbox.id]) {
                        defaultValue = orionInputs[checkbox.id].defaultCheckedValue;
                    }
                }
                checkbox.checked = defaultValue;
            });

            var inputs = $('#table_Actions input');
            var userGroupCheckboxes = [];
            $.each(inputs, function (index, input) {
                var idSplit = input.id.split('_');
                if (idSplit[0] === 'checkbox') {
                    userGroupCheckboxes.push(input);
                }
            });
            $.each(userGroupCheckboxes, function (index, checkbox) {
                checkbox.addEventListener('click', orionInfoViews.infoview_UserGroups.checkbox_onClick);
                checkbox.addEventListener('change', orionInfoViews.infoview_UserGroups.checkbox_onChange);
                var id = checkbox.id;
                var actionID = parseInt(id.split('checkbox_Actions')[1]); 
                var action = null;
                $.each(orionStaticValues.security.actions, function (key, thisAction) {
                    if (action === null) {
                        if (thisAction.ID === actionID) {
                            action = thisAction;
                        }
                    }
                });
                //var labelText = $(checkbox).attr('data-label');
                var labelText = action.Description;
                var label = '<label for="' + checkbox.id + '" class="ftsLabel">&nbsp;&nbsp;' + labelText + '</label>';
                $(checkbox).after(label);
            });
        }
    },
    ftsContent: {
        build: function () {
            fts.setHeightRelativeToSiblings($('.ftsContent'));
        },
        resize: function (wrapper) {
            if (wrapper !== null && wrapper !== undefined) {
                var thisContentDiv = wrapper.find('.ftsContent');
                fts.setHeightRelativeToSiblings(thisContentDiv);
            }
            //else {
            //    fts.setHeightRelativeToSiblings($('.ftsContent'));
            //}
        }
    },
    ftsContentWrapper: {
    },
    ftsContextMenu: {
    },
    ftsDatePicker: {
        defaultConfig: {
            start: 'month',
            depth: 'month'
        }
    },
    ftsDropDownList: {
        defaultConfig: {
            dataTextField: 'Name',
            dataValueField: 'ID',
            dataSource: {
                transport: {
                    read: {
                        cache: false
                    }
                },
                serverFiltering: false
            },
            autoBind: false
        }
    },
    ftsGrid: {
        build: function () {
            $('.k-grid').addClass('ftsGrid');
        }
        //defaultConfig: {
        //    dataSource: {
        //        transport: {
        //            read: {
        //                //url: SPECIFY ON ROOT,
        //                data: this.data
        //            }
        //        },
        //        schema: {
        //            type: "json",
        //            //model: SPECIFY ON ROOT,
        //            parse: fts.parseGridData
        //        }
        //    },
        //    sortable: true,
        //    persistSelection: true,
        //    scrollable: true,
        //    filterable: true,
        //    resizable: true,
        //    autoBind: false,
        //    columnMenu: true,
        //    excel: {
        //        //fileName: SPECIFY ON ROOT,
        //        filterable: true,
        //        allPages: true
        //    }
        //}
    },
    ftsGridWrapper: {
    },
    ftsLoadingIndicator: {
        show: function (target) {
            kendo.ui.progress(target, true);
        },
        hide: function (target) {
            kendo.ui.progress(target, false);
        }
    },
    ftsMultiSelect: {
        defaultConfig: {
            dataTextField: 'Name',
            dataValueField: 'ID',
            dataSource: {
                transport: {
                    read: {
                        cache: false
                    }
                },
                serverFiltering: false
            },
            autoBind: false,
            autoClose: false
        }
    },
    ftsNavbar: {
        build: function () {
            $('.ftsNavbar__button--dropdown').text(orionSessionVariables.LoginID);
            $('.ftsNavbar__button--dropdown').append('<span class="k-icon k-i-arrow-chevron-down"></span>');
            var pageName = $(document).find('title').text();
            var pageNameSubstring = pageName.substr(0, pageName.indexOf(" "));
            var n = 0;
            var navbarItems = $("a.ftsNavbar__tab");
            var itemFound = false;
            do {
                var navbarItem = navbarItems[n];
                if (navbarItem.innerHTML === pageNameSubstring) {
                    $(navbarItem).addClass('ftsNavbar__tab--active');
                    itemFound = true;
                }
                n++;
            } while (!itemFound && n <= navbarItems.length - 1);

            $.each($('.ftsNavbar__button:not(.ftsNavbar__button--dropdown)'), function (index, button) {
                fts.buildTooltip($(button), $(button).attr('data-tooltip'));
            });
        },
        resize: function (element) { },
        ftsNavbar__tab: {
            onClick: function (e) {
                var targetPage = e.innerHTML;
                if (targetPage === "VTM") {
                    targetPage = "Home";
                }
                //// multi-page app
                location.href = targetPage;
                location.hash = targetPage;

                // single-page app
                //var targetPageElement = $('#page_' + targetPage);
                //if (!targetPageElement.hasClass('ftsPage__tab--active')) {
                //    $('.ftsPage__tab--active').removeClass('ftsPage__tab--active');
                //    targetPageElement.addClass('ftsPage__tab--active');
                //}
            }
        },
        settings_onclick: function (e) {
            console.log('fts.ftsNavbar.settings_onclick');
            fts.openWindow(orionWindows.window_Settings);
        },
        userManual_onclick: function (e) {
            console.log('fts.ftsNavbar.userManual_onclick');
            fts.openUserManual();
        }
    },
    ftsNotification: {
        defaultConfig: {
            position: {
                pinned: true,
                top: null,
                left: null,
                bottom: 30,
                right: 30
            },
            stacking: 'down',
            autoHideAfter: 6000
        }
    },
    ftsNumericTextBox: {
        defaultConfig: {
            format: '#',
            min: 0,
            max: 99,
            value: 0,
            decimal: 0
        }
    },
    ftsPageWrapper: {
    },
    ftsPanel: {
        block: {
            instances: function () { return $('.ftsPanel'); },
            cssConfig: function () {
                return {
                    'width': '100%',
                    'height': '100%',
                    'background-color': '#f5f5f5',
                    'padding': '0px',
                    'border': 'solid',
                    'border-width': '1px',
                    'border-radius': '0px',
                    'overflow': 'hidden'
                };
            }
        },
        modifiers: {
            borderless: {
                instances: function () { return $('.ftsPanel--borderless'); },
                cssConfig: function () {
                    return {
                        'border': 'none',
                        'border-width': '0px'
                    };
                }
            }
        },
        setCSS: function () {
            var blockInstances = this.block.instances();
            if (blockInstances !== null) {
                $.each(this.block.cssConfig(), function (attribute, value) {
                    blockInstances.css(attribute, value);
                });
            }
            var modifiers = this.modifiers;
            var modifierInstances = this.modifiers;
            $.each(modifiers, function (index, modifier) {
                var modifierInstance = $(modifier);
                $.each(modifierInstance.cssConfig(), function (attribute, value) {
                    modifierInstance.css(attribute, value);
                });
            });
        }
    },
    ftsRadioGroup: {
        build: function () {
            //$.each($('.ftsRadioGroup'), function (index, radioGroup) {
            //    var buttons = [];
            //    $.each(orionInputs[radioGroup.id].dataSource, function (key, option) {
            //        var button = fts.html.radioButton('radio_' + radioGroup.id.split('_')[1] + key, option.ID);
            //        buttons.push(button);
            //    });
            //    var colWidth = buttons.length === 5 ? 3 : 12 / buttons.length;
            //    var counter = buttons.length;
            //    var columnWidths = [];
            //    $.each(buttons, function (index, button) {
            //        if (counter > 0) {
            //            columnWidths.push(colWidth);
            //            counter--;
            //        }
            //    });
            //    var tableStart = fts.html.table.openingTag(columnWidths);
            //    var tableEnd = fts.html.table.closingTag;
            //    var rowStart = fts.html.table.row.openingTag;
            //    var rowEnd = fts.html.table.row.closingTag;
            //    var isHorizontal = $(radioGroup).hasClass('ftsRadioGroup--horizontal');
            //    var radioGroupHTML = isHorizontal
            //        ? tableStart + rowStart + buttons + rowEnd + tableEnd
            //        : tableStart + buttons + tableEnd;
            //    $(radioGroup).append(radioGroupHTML);
            //});
            //ftsConfig.ftsRadioGroup.label();
        },
        label: function () {
            $.each($('.ftsRadioGroup'), function (index, input) {
                var root = orionInputs[input.id];
                if (root.labelText !== undefined) {
                    var labelClass = $(input).hasClass('ftsRequiredField') ? 'ftsLabel ftsLabel--requiredField' : 'ftsLabel';
                    var thisLabel = fts.html.label(root);
                    $(input).before(thisLabel);
                }
            });
        },
        onChange: function (e) {
            var radioGroup = e.target.closest('.ftsRadioGroup');
            var radioButtons = $('#' + radioGroup.id + ' .ftsRadioButton');
            $.each(radioButtons, function (index, radioButton) {
                radioButton.checked = radioButton.id === e.target.id;
            });
        }
    },
    ftsRadioButton: {
        build: function () {
            var radioButtons = $('.ftsRadioButton');
            $.each(radioButtons, function (index, button) {
                $(button).attr('type', 'radio');
                button.addEventListener('change', ftsConfig.ftsRadioGroup.onChange);
            });
        },
        label: function () {
            var inputs = $('.ftsRadioButton');
            $.each(inputs, function (index, input) {
                var root = orionInputs[input.id];
                if (root.labelText !== undefined) {
                    var labelClass = $(input).hasClass('ftsRequiredField') ? 'ftsLabel ftsLabel--requiredField' : 'ftsLabel';
                    var labelElement = '<label for="' + input.id + '" class="' + labelClass + '">' + root.labelText + '</label>';
                    input.before(labelElement);
                }
            });
        }
    },
    ftsScreenDimmer: {
        build: function () {
            $('.ftsBody').append('<div class="ftsScreenDimmer"></div>');
        },
        show: function (bool) {
            var display = bool ? 'inline' : 'none';
            $('.ftsScreenDimmer').attr('style', 'display: ' + display);
        }
    },
    ftsSearchBox: {
        build: function () {
            var searchboxes = $('.ftsSearchBox');
            searchboxes.on('input', ftsConfig.ftsSearchBox.onInput);
        },
        config: {
            inheritFromClasses: [
                'ftsTextBox'
            ]
        },
        isNumeric: function (n) {
            return !isNaN(parseFloat(n)) && isFinite(n);
        },
        getBoolean: function (str) {
            if ("true".startsWith(str)) {
                return true;
            } else if ("false".startsWith(str)) {
                return false;
            } else {
                return null;
            }
        },
        onInput: function (e) {
            var root = orionInputs[e.target.id];
            var gridRoot = fts.extrapolations.grid(root);
            var grid = fts.getWidgetByRoot(gridRoot);
            var columns = grid.columns;
            var filter = { logic: 'or', filters: [] };
            $.each(columns, function (colIndex, col) {
                if (col.field) {
                    var type = grid.dataSource.options.schema.model.fields[col.field].type;
                    if (type === 'string') {
                        filter.filters.push({
                            field: col.field,
                            operator: 'contains',
                            value: e.target.value
                        });
                    }
                    else if (type === 'number') {
                        if (ftsConfig.ftsSearchBox.isNumeric(e.target.value)) {
                            filter.filters.push({
                                field: col.field,
                                operator: 'eq',
                                value: e.target.value
                            });
                        }
                    }
                    else if (type === 'date') {
                        var data = grid.dataSource.data();
                        for (var i = 0; i < data.length; i++) {
                            var dateStr = kendo.format(col.format, data[i][col.field]);
                            // change to includes() if you wish to filter that way https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
                            if (dateStr.startsWith(e.target.value)) {
                                filter.filters.push({
                                    field: col.field,
                                    operator: 'eq',
                                    value: data[i][col.field]
                                });
                            }
                        }
                    }
                    else if (type === 'boolean' && ftsConfig.ftsSearchBox.getBoolean(e.target.value) !== null) {
                        var bool = ftsConfig.ftsSearchBox.getBoolean(e.target.value);
                        filter.filters.push({
                            field: col.field,
                            operator: 'eq',
                            value: bool
                        });
                    }
                }
            });
            grid.dataSource.filter(filter);
        }
    },
    ftsTable: {
        build: function () {
            // Add red asterisks for required fields
            var requiredFieldAsterisk = '<span class="ftsLabel--requiredFieldAsterisk">*&nbsp;</span>';
            $('.ftsLabel.ftsLabel--requiredField').append(requiredFieldAsterisk);
        },
        resize: function(element) {
            var tables = element !== undefined ? $(element).find('.ftsTable') : $('.ftsTable');
            // Set table width based on parent width
            if (tables.length > 0) {
                for (var i = 0; i < tables.length; i++) {
                    var table = $(tables[i]);
                    var parent = table.parent();
                    var parentWidth = parent.width();
                    table.width(parentWidth);
                }
            }
        }
    },
    ftsTabStrip: {
        build: function () {
            $('.ftsTabStrip > ul > li').addClass('ftsTabStrip__tab');
        },
        defaultConfig: {
            animation: {
                open: {
                    effects: "fadeIn"
                }
            }
        },
        resize: function() {}
    },
    ftsTextArea: {
        resize: function() {}
    },
    ftsTextBox: {
        config: {
            jQuery: {
                addClass: [
                    'k-textbox'
                ],
                attr: {
                    type: 'text'
                }
            }
        },
        resize: function () {}
    },
    ftsTogglePanel: {
        build: function () {
            var headers = $('.ftsTogglePanel__Header');
            $.each(headers, function (index, header) {
                header.addEventListener('click', ftsConfig.ftsTogglePanel.onClick);
            });
        },
        onClick: function (e) {
            var togglePanel = $(e.currentTarget).parent()[0];
            var id = togglePanel.id;
            var panelContent = $('#' + id + ' > .ftsTogglePanel__Content');
            var plus = 'k-i-plus';
            var minus = 'k-i-minus';
            var iconWrapper = $('#' + id + ' > .ftsTogglePanel__Header > .ftsTogglePanel__Icon');
            var classToRemove = iconWrapper.hasClass(plus) ? plus : minus;
            var classToAdd = classToRemove === plus ? minus : plus;
            var toggleIcon = function () {
                iconWrapper.removeClass(classToRemove);
                iconWrapper.addClass(classToAdd);
            };
            var scrollChildren = $(togglePanel).parent().children();
            var scrollWrapper = $(togglePanel).closest('div.ftsContent--scroll');
            var pixelsToScroll = 0;
            var matchingTogglePanelFound = false;
            $.each(scrollChildren, function (index, element) {
                if (!matchingTogglePanelFound) {
                    if (element !== togglePanel) {
                        var outerHeight = $(element).outerHeight();
                        var scrollHeight = element.scrollHeight;
                        pixelsToScroll += outerHeight;
                    }
                    else {
                        matchingTogglePanelFound = true;
                    }
                }
            });
            if (classToRemove === plus) {
                panelContent.animate({
                    height: 'toggle'
                }, 400,
                    function () {
                        $(scrollWrapper).scrollTop(pixelsToScroll);
                    }
                );
                toggleIcon();
            }
            else {
                panelContent.animate({
                    height: 'toggle'
                }, 400,
                    function () {
                        toggleIcon();
                    }
                );
            }
        },
        collapseTogglePanels: function (containerID) {
            var togglePanels = $('#' + containerID + ' .ftsTogglePanel');
            $.each(togglePanels, function (index, togglePanel) {
                ftsConfig.ftsTogglePanel.collapseTogglePanel(togglePanel);
            });
        },
        collapseTogglePanel: function (togglePanel) {
            var id = togglePanel.id;
            var panelContent = $('#' + id + ' > .ftsTogglePanel__Content');
            var iconWrapper = $('#' + id + ' > .ftsTogglePanel__Header > .ftsTogglePanel__Icon');
            var panelIsOpen = iconWrapper.hasClass('k-i-minus');
            if (panelIsOpen) {
                panelContent.animate({
                    height: 'toggle'
                }, 400,
                    function () {
                        iconWrapper.removeClass('k-i-minus');
                        iconWrapper.addClass('k-i-plus');
                    }
                );
            };
        }
    },
    ftsToggleSelector: {
        build: function () {
            var toggleSelectors = $('.ftsToggleSelector');
            $.each(toggleSelectors, function (index, toggleSelector) {
                // table
                var table = document.createElement('table');
                table.classList.add('ftsTable');

                // colgroup
                var colgroup = document.createElement('colgroup');
                var col1 = document.createElement('col');
                var col2 = document.createElement('col');
                var col3 = document.createElement('col');
                col1.classList.add('col-md-4');
                col2.classList.add('col-md-4');
                col3.classList.add('col-md-4');
                $(colgroup).append(col1);
                $(colgroup).append(col2);
                $(colgroup).append(col3);

                // table row (tr)
                var row = document.createElement('tr');

                // column 1 (td)
                var column1 = document.createElement('td');
                var column1Content = document.createElement('div');
                column1Content.classList.add('ftsToggleSelector__left');
                var leftTextNode = document.createTextNode(orionInputs[toggleSelector.id].leftOptionText);
                $(column1Content).append(leftTextNode);
                $(column1).append(column1Content);
                $(row).append(column1);

                // column 2 (td)
                var column2 = document.createElement('td');
                var outerSlider = document.createElement('div');
                outerSlider.classList.add('ftsToggleSelector__outerSlider');
                $(outerSlider).attr('onclick', 'ftsConfig.ftsToggleSelector.onClick(this)');
                var innerSlider = document.createElement('div');
                innerSlider.classList.add('ftsToggleSelector__innerSlider');
                $(outerSlider).append(innerSlider);
                $(column2).append(outerSlider);
                $(row).append(column2);

                // column 3 (td)
                var column3 = document.createElement('td');
                var column3Content = document.createElement('div');
                column3Content.classList.add('ftsToggleSelector__right');
                var rightTextNode = document.createTextNode(orionInputs[toggleSelector.id].rightOptionText);
                $(column3Content).append(rightTextNode);
                $(column3).append(column3Content);
                $(row).append(column3);

                $(table).append(colgroup);
                $(table).append(row);

                $(toggleSelector).append(table);
                var valueID = orionInputs[toggleSelector.id].leftOptionValue;
                var root = orionInputs[toggleSelector.id];
                fts.value(root, valueID);
            });

        },
        onClick: function (e) {
            console.log('ftsConfig.ftsToggleSelector.onClick');
            var toggleSelector = $(e).closest('.ftsToggleSelector');
            var id = toggleSelector[0].id;
            var root = orionInputs[id];
            var leftSide = $('#' + id + ' .ftsToggleSelector__left');
            var rightSide = $('#' + id + ' .ftsToggleSelector__right');
            var innerSlider = $('#' + id + ' .ftsToggleSelector__innerSlider');
            var leftMargin = innerSlider.css('margin-left');
            var sliderIsOnLeft = leftMargin === '2px';
            var newMargin = sliderIsOnLeft ? '72px' : '2px';
            var normalTextSide = sliderIsOnLeft ? leftSide : rightSide;
            var boldTextSide = sliderIsOnLeft ? rightSide : leftSide;

            innerSlider.animate({
                'margin-left': newMargin
            }, 500, function () {
                normalTextSide.css('font-weight', 'normal');
                boldTextSide.css('font-weight', 'bold');
            });

            var valueID = sliderIsOnLeft ? orionInputs[id].rightOptionValue : orionInputs[id].leftOptionValue;
            fts.value(root, valueID);
            orionInputs[id].onClick();
        }
    },
    ftsToolbar: {
        build: function () {
            $('.ftsToolbar--toggle > div:last-of-type').animate({
                height: 'hide'
            });
        },
        resize: function (toolbar) {
            var toolbarHeight = $(toolbar).height();
            var padding_top = parseInt($(toolbar).css('padding-top').split('px')[0]);
            var padding_bottom = parseInt($(toolbar).css('padding-bottom').split('px')[0]);
            var pagePadding = 5;
            var totalToolbarHeight = toolbarHeight + padding_top + padding_bottom + pagePadding;
            var parent = $(toolbar).parent();
            var siblings = $(parent).children();
            if (siblings.length > 0) {
                for (var i = 0; i < siblings.length; i++) {
                    var sibling = $(siblings[i]);
                    if (sibling.hasClass('ftsContent')) {
                        sibling.attr('style', 'height: calc(100% - ' + totalToolbarHeight + 'px)');
                    }
                }
            }
        }
    },
    ftsUpload: {},
    ftsWindow: {
        defaultConfig: {
            actions: ['Close'],
            draggable: true,
            resizable: true
        },
        resize: function () {
            var window = ftsConfig.ftsWindow.openedWindows['openedWindow'];
            if (window !== null) {
                ftsConfig.ftsContent.resize(window);
            }
        },
        addTitlebarText: function (text) {
            var windowTitleElement = $(ftsConfig.ftsWindow.openedWindows['openedWindow'].parent().find('.k-window-title:first-of-type'));
            windowTitleElement.append('<span id="subtitle_OpenedWindow" class="ftsSubtitle">(' + text + ')</span>');
        },
        removeTitlebarText: function () {
            $('#subtitle_OpenedWindow').remove();
        },
        openedWindows: {
            openedWindow: null,
            secondOpenedWindow: null,
            thirdOpenedWindow: null
        },
        ignoreWindowCloseEvent: false
    },
    ftsWrapper: {
        resize: function (searchContainer) {
            fts.setHeightRelativeToSiblings('.ftsWrapper', searchContainer);
        }
    }
};

var fts = {
    buildStuff: function (roots) {
        $.each(roots, function (id, root) {
            var block = fts.getBlockByID(id);
            var elementType = fts.getElementTypeByID(id);
            if (block !== undefined) {
                if (block.defaultConfig !== undefined) {
                    var configOptions = fts.copyObject(block.defaultConfig);
                    if (root.config !== undefined) {
                        $.each(root.config, function (newOption, newValue) {
                            if (newOption === 'url') {
                                configOptions.dataSource.transport.read.url = newValue;
                            }
                            else if (elementType === 'grid') {
                                if (newOption === 'model') {
                                    configOptions.dataSource.schema.model = orionStaticValues.viewModels[newValue];
                                }
                                else if (newOption === 'fileName') {
                                    configOptions.excel.fileName = newValue;
                                }
                                else {
                                    configOptions[newOption] = newValue;
                                }
                            }
                            else {
                                configOptions[newOption] = newValue;
                            }
                        });
                    }
                    var element = fts.getElement(root);
                    var widgetData = fts.getWidgetDataByRoot(root);
                    element[widgetData](configOptions);
                }
            }
        });
    },
    buildBlocks: function () {
        console.log('fts.buildBlocks');
        $.each(ftsConfig, function (blockName, block) {
            const setJquery = function (block) {
                if (block.config.jQuery !== undefined) {
                    $.each(block.config.jQuery, function (method, values) {
                        $.each(values, function (key, value) {
                            var args = [key];
                            if (value !== undefined) {
                                args = key !== 0 ? [key] + ', ' + [value] : value;
                            }
                            var selector = '.' + blockName;
                            var elements = $(selector);
                            $.each(elements, function (index, element) {
                                $(element)[method](args);
                            });
                        });
                    });
                }
            };
            if (block.config !== undefined) {
                // inheritances config (must be before block-level config)
                if (block.config.inheritFromClasses !== undefined) {
                    $.each(block.config.inheritFromClasses, function (index, bequeathingClass) {
                        var bequeathingBlock = ftsConfig[bequeathingClass];
                        setJquery(bequeathingBlock);
                    });
                }
                // block-level config (must be after inheritances config)
                setJquery(block);
            }
            fts.labelHelper(blockName);
        });
    },
    buildObjectByFieldList: function (fieldList) {
        var object = {};
        for (var i = 0; i < fieldList.length; i++) {
            object[fieldList[i]] = null;
        }
        return object;
    },
    buildSiteElements: function () {
        console.log('fts.buildSiteElements');
        fts.setPageTitle('Vendor Travel Management - Projects');

        var buildOrder_First = $.extend({}, orionElements, orionInputs, orionGrids, orionWindows);
        var buildOrder_Second = ftsConfig;
        var objects = [buildOrder_First, buildOrder_Second];
        $.each(objects, function (key, object) {
            $.each(object, function (index, thisObject) {
                if (thisObject.build !== undefined) {
                    //console.log('building ' + index);
                    thisObject.build();
                }
            });
        });

        fts.buildBlocks();
        fts.setCSSforRoots();

        orionInfoViews.projectInfoView.loadingProjectInfo = false;
    },
    buildTooltip: function (element, content) {
        element.kendoTooltip({
            position: 'bottom',
            content: content
        }).data('kendoTooltip');
    },
    setCSSforRoots: function () {
        $.each(orionInputs, function (id, root) {
            if (root.css !== undefined) {
                fts.getElement(root).css(root.css);
            }
        });
    },
    closeWindow: function () {
        if (ftsConfig.ftsWindow.openedWindows.thirdOpenedWindow !== null) {
            ftsConfig.ftsWindow.openedWindows.openedWindow = ftsConfig.ftsWindow.openedWindows.secondOpenedWindow;
            ftsConfig.ftsWindow.openedWindows.secondOpenedWindow = ftsConfig.ftsWindow.openedWindows.thirdOpenedWindow;
            ftsConfig.ftsWindow.openedWindows.thirdOpenedWindow = null;
            ftsConfig.ftsWindow.openedWindows.secondOpenedWindow.data('kendoWindow').center().open();
        } else if (ftsConfig.ftsWindow.openedWindows.secondOpenedWindow !== null) {
            ftsConfig.ftsWindow.openedWindows.openedWindow = ftsConfig.ftsWindow.openedWindows.secondOpenedWindow;
            ftsConfig.ftsWindow.openedWindows.secondOpenedWindow = null;
            ftsConfig.ftsWindow.openedWindows.openedWindow.data('kendoWindow').center().open();
        } else {
            ftsConfig.ftsWindow.openedWindows.openedWindow = null;
            ftsConfig.ftsScreenDimmer.show(false);
        }
    },
    copyObject: function (object) {
        var copyOfObject = {};
        $.each(object, function (key, value) {
            copyOfObject[key] = value;
        });
        return copyOfObject;
    },
    convert: {
        dateToString: function (date) {
            var thisDate = new Date(parseInt(date.substr(6)));
            var month = '' + (thisDate.getMonth() + 1);
            var day = '' + thisDate.getDate();
            var year = thisDate.getFullYear();
            var dateString = month + '/' + day + '/' + year;
            return dateString;
        },
        fromPascalCaseToCamelCase: function (string) {
            var firstLetter = string.substr(0, 1).toLowerCase();
            var remainingLetters = string.substr(1, string.length - 1);
            return firstLetter + remainingLetters;
        },
        fromCamelCaseToPascalCase: function (string) {
            var firstLetter = string.substr(0, 1).toUpperCase();
            var remainingLetters = string.substr(1, string.length - 1);
            return firstLetter + remainingLetters;
        }
    },
    disableAnInput: function (root, value) {
        var input = fts.getInput(root);
        if (fts.isNull(input)) {
            console.log('fts.disableInput ERROR: input is null');
        }
        else {
            if (input.enable !== undefined) {
                input.enable(!value);
            }
            else {
                input.attr('disabled', value);
            }
        }
    },
    dom: {
        animate: function (element, isShown) {
            if (isShown === 'toggle' || isShown === undefined) {
                isShown = element.css('display') === 'none';
            }
            element.animate({
                height: isShown ? 'show' : 'hide'
            });
        },
        fade: function (element, isShown) {
            if (isShown === 'toggle' || isShown === undefined) {
                isShown = element.css('display') === 'none';
            }
            element[isShown ? 'fadeIn' : 'fadeOut']();
        }
    },
    extrapolations: {
        baseDetails: function (id) {
            var baseDetails = {
                controlType: '',
                modelType: '',
                extensionText: ''
            };
            var split = id.split('_');
            var modelTypeWithExtensionText = split[1];
            var firstLetterOfExtensionText = '';
            for (var i = 1; i < modelTypeWithExtensionText.length; i++) {
                if (modelTypeWithExtensionText[i].toUpperCase() === modelTypeWithExtensionText[i]) {
                    firstLetterOfExtensionText = i;
                    break;
                }
            }
            // btn_EmployeeCreate
            // btn
            baseDetails.controlType = split[0];
            // Employee
            baseDetails.modelType = firstLetterOfExtensionText !== '' ? modelTypeWithExtensionText.substring(0, firstLetterOfExtensionText) : modelTypeWithExtensionText; // Employee
            // Create
            baseDetails.ExtensionText = firstLetterOfExtensionText !== '' ? modelTypeWithExtensionText.substring(firstLetterOfExtensionText) : '';

            return baseDetails;
        },
        all: function (root) {
            var extrapolations = {
                controlType: '',
                modelType: '',
                extensionText: '',
                root: '',
                block: '',
                widgetData: '',
                widget: '',
                id: '',
                element: '',
                infoView: '',
                grid: '',
                selectedGridRow: '',
                selectedGridDataItem: '',
                window: '',
                inputs: ''
            };
            var $$ = $.extend({}, orionButtons, orionElements, orionInputs, orionGrids, orionWindows);
            var id = fts.extrapolations.id(root);
            if (id !== '') {
                var details = fts.extrapolations.baseDetails(id);
                extrapolations.controlType = details.controlType;
                extrapolations.modelType = details.modelType;
                extrapolations.ExtensionText = details.extensionText;
                extrapolations.root = $$[id];
                $.each(fts.blocks, function (blockName, thisBlock) {
                    if (thisBlock.controlType === extrapolations.controlType) {
                        extrapolations.block = thisBlock;
                        extrapolations.widgetData = thisBlock.widgetData;
                        if (thisBlock.widgetData !== '') {
                            var element = fts.extrapolations.element(root);
                            var widgetData = fts.extrapolations.block(root).widgetData;
                            extrapolations.widget = element.data(widgetData);
                        }
                    }
                });
                extrapolations.id = id;
                extrapolations.element = $('#' + id);
                extrapolations.infoView = $$['infoview_' + extrapolations.modelType];
                extrapolations.grid = $$['grid_' + extrapolations.modelType];
                extrapolations.window = $$['window_' + extrapolations.modelType];

                $.each(extrapolations.infoView.dataModel, function (fieldName, defaultValue) {
                    $.each($$, function (id, root) {
                        var extensionText = fts.extrapolations.extensionText(root);
                        var thisModelType = fts.extrapolations.modelType(root);
                        if (extensionText === fieldName && thisModelType === extrapolations.modelType) {
                            extrapolations.inputs.push(root);
                        }
                    });
                });
                if (extrapolations.grid !== '') {
                    var selectedGridRow = fts.extrapolations.selectedGridRow(root);
                    if (selectedGridRow !== '') {
                        extrapolations.selectedGridRow = selectedGridRow;
                        extrapolations.selectedGridDataItem = fts.extrapolations.selectedGridDataItem(root);
                    }
                }
            }
            return extrapolations;
        },
        controlType: function (root) {
            var details = fts.extrapolations.baseDetails(fts.extrapolations.id(root));
            return details.controlType;
        },
        modelType: function (root) {
            var details = fts.extrapolations.baseDetails(fts.extrapolations.id(root));
            return details.modelType;
        },
        extensionText: function (root) {
            var details = fts.extrapolations.baseDetails(fts.extrapolations.id(root));
            return details.extensionText;
        },
        block: function (root) {
            var controlType = fts.extrapolations.controlType(root);
            var block = '';
            $.each(fts.blocks, function (blockName, thisBlock) {
                if (block === '') {
                    if (thisBlock.controlType === controlType) {
                        block = thisBlock;
                    }
                }
            });
            return block;
        },
        widgetData: function (root) {
            var block = fts.extrapolations.block(root);
            return block.widgetData;
        },
        id: function (root) {
            var id = '';
            var $$ = $.extend({}, orionButtons, orionElements, orionInputs, orionGrids, orionWindows);
            $.each($$, function (thisID, thisRoot) {
                if (id === '') {
                    if (root === thisRoot) {
                        id = thisID;
                    }
                }
            });
            return id;
        },
        inputs: function (root) {
            var inputs = [];
            $.each(root.dataModel, function (fieldName, defaultValue) {
                var $$ = $.extend({}, orionButtons, orionElements, orionInputs, orionGrids, orionWindows);
                $.each($$, function (id, root) {
                    var extensionText = fts.extrapolations.extensionText(root); // BrandID, StartDate, etc
                    var thisModelType = fts.extrapolations.modelType(root); // Employee, Project, User, etc
                    if (extensionText === fieldName && thisModelType === extrapolations.modelType) {
                        inputs.push(root);
                    }
                });
            });
            return inputs;
        },
        root: function (id) {
            var $$ = $.extend({}, orionButtons, orionElements, orionInputs, orionGrids, orionWindows);
            return $$[id];
        },
        element: function (root) {
            var id = fts.extrapolations.id(root);
            return $('#' + id);
        },
        infoView: function (root) {
            var modelType = fts.extrapolations.modelType(root);
            var $$ = $.extend({}, orionButtons, orionElements, orionInputs, orionGrids, orionWindows);
            return $$['infoview_' + modelType];
        },
        grid: function (root) {
            var modelType = fts.extrapolations.modelType(root);
            var $$ = $.extend({}, orionButtons, orionElements, orionInputs, orionGrids, orionWindows);
            return $$['grid_' + modelType];
        },
        selectedGridRow: function (root) {
            var gridRoot = fts.extrapolations.grid(root);
            var grid = fts.extrapolations.widget(gridRoot);
            var row = grid.table.find('tr.k-state-selected');
            if (row.length === 0) {
                row = '';
            }
            return row;
        },
        selectedGridDataItem: function (root) {
            var infoView = fts.extrapolations.infoView(root);
            var rowElement = fts.extrapolations.selectedGridRow(infoView);
            var dataItem = '';
            if (rowElement !== '') {
                var gridRoot = fts.extrapolations.grid(infoView);
                var grid = fts.extrapolations.widget(gridRoot);
                dataItem = grid.dataItem(rowElement);
            }
            return dataItem;
        },
        widget: function (root) {
            var element = fts.extrapolations.element(root);
            var widgetData = fts.extrapolations.block(root).widgetData;
            return element.data(widgetData);
        },
        window: function (root) {
            var modelType = fts.extrapolations.modelType(root);
            var $$ = $.extend({}, orionButtons, orionElements, orionInputs, orionGrids, orionWindows);
            return $$['window_' + modelType];
        },
        words: function (string) {
            // ftsRule: field names must be PascalCase
            // ftsRule: DateTime fields must contain the word (atom) 'Date' (DateTime values are parsed to strings on ajax success calls)
            // ftsRule: 'ID' is the only word (atom) in a field name that can contain more than one capital letter
            var words = [];
            var thisWord = '';
            var thisWord_indexOfFirstCharacter = 0;
            var thisWord_indexOfLastCharacter = null;
            for (var i = 1; i < string.length; i++) {
                if (string[i].toUpperCase() === string[i]) {
                    thisWord_indexOfLastCharacter = string[i] === 'D' && string[thisWord_indexOfFirstCharacter] === 'I' ? i : i - 1;
                }
                else if (i === string.length - 1) {
                    thisWord_indexOfLastCharacter = i;
                }
                else {
                    thisWord_indexOfFirstCharacter = thisWord_indexOfLastCharacter + 1;
                    thisWord_indexOfLastCharacter = null;
                }
                thisWord = string.substring(thisWord_indexOfFirstCharacter, thisWord_indexOfLastCharacter + 1 - thisWord_indexOfFirstCharacter);
                words.push(thisWord);
            }
            return words;
        },
        fromFieldName: {
            input: function (field) {
                //$.each($$, function (inputID, thisInput) {
                //    var extensionText = fts.extrapolations.extensionText(thisInput);
                //    if (extensionText !== '') {
                //        if (extensionText === field.fieldName) {
                //            fts.dataMethods.value(thisInput, field.newValue);
                //        }
                //    }
                //}

            },
            infoView: function (fieldName) {

            }
        }
    },
    ftsInputTypes: {
        btn: {
            block: 'ftsButton',
            widgetData: null
        },
        checkbox: {
            block: 'ftsCheckbox',
            widgetData: null
        },
        contentwrapper: {
            block: 'ftsContentWrapper',
            widgetData: null
        },
        contextmenu: {
            block: 'ftsContextMenu',
            widgetData: null
        },
        datepicker: {
            block: 'ftsDatePicker',
            widgetData: 'kendoDatePicker'
        },
        ddl: {
            block: 'ftsDropDownList',
            widgetData: 'kendoDropDownList'
        },
        grid: {
            block: 'ftsGrid',
            widgetData: 'kendoGrid'
        },
        gridwrapper: {
            block: 'ftsGridWrapper',
            widgetData: null
        },
        multiselect: {
            block: 'ftsMultiSelect',
            widgetData: 'kendoMultiSelect'
        },
        navbartab: {
            block: 'ftsNavbar__tab',
            widgetData: null
        },
        notification: {
            block: 'ftsNotification',
            widgetData: 'kendoNotification'
        },
        numerictextbox: {
            block: 'ftsNumericTextBox',
            widgetData: 'kendoNumericTextBox'
        },
        pagewrapper: {
            block: 'ftsPageWrapper',
            widgetData: null
        },
        radio: {
            block: 'ftsRadioButton',
            widgetData: null
        },
        tabstrip: {
            block: 'ftsTabStrip',
            widgetData: 'kendoTabStrip'
        },
        textarea: {
            block: 'ftsTextArea',
            widgetData: null
        },
        textbox: {
            block: 'ftsTextBox',
            widgetData: null
        },
        toggleselector: {
            block: 'ftsToggleSelector',
            widgetData: null
        },
        upload: {
            block: 'ftsUpload',
            widgetData: 'kendoUpload'
        },
        window: {
            block: 'ftsWindow',
            widgetData: 'kendoWindow'
        }
    },
    getElementTypeByID: function (id) {
        return id.split('_')[0];
    },
    getElement: function (root) {
        var id = fts.getID(root);
        return $('#' + id);
    },
    getID: function (root) {
        let id = '';
        const objectList = $.extend({}, orionButtons, orionElements, orionInputs, orionInfoViews, orionGrids, orionWindows);
        $.each(objectList, function (key, thisRoot) {
            if (root === thisRoot) {
                id = key;
            }
        });
        return id;
    },
    getInput: function (root) {
        var element = fts.getElement(root);
        var id = fts.getID(root);
        var widgetData = fts.getWidgetDataByID(id);
        var input = widgetData !== null ? element.data(widgetData) : element;
        return input;
    },
    getInputsByInfoViewID: function (viewID) {
        var elements = $('#' + viewID + ' .ftsInput');
        var inputs = [];
        $.each(elements, function (index, element) {
            if (element.nodeName.toLowerCase() !== 'span') {
                inputs.push(orionInputs[element.id]);
            }
        });
        return inputs;
    },
    getEmptyViewModel: function (viewModelID) {
    },
    getWidgetByID: function (id) {
        var allRoots = $.extend({}, orionElements, orionInputs, orionGrids, orionWindows);
        var root = '';
        $.each(allRoots, function (rootID, thisRoot) {
            if (root === '') {
                if (rootID === id) {
                    root = thisRoot;
                }
            }
        });
        var widget = fts.getWidgetByRoot(root);
        return widget;
    },
    getWidgetByRoot: function (rootObject) {
        var element = fts.getElement(rootObject);
        var widgetData = fts.getWidgetDataByRoot(rootObject);
        return widgetData ? element.data(widgetData) : element;
    },
    getWidgetDataByID: function (id) {
        var elementType = fts.getElementTypeByID(id);
        var thisWidgetData = null;
        if (fts['ftsInputTypes'][elementType] === undefined) {
            console.log('ERROR  fts.getWidgetDataByID');
            console.log('    fts.ftsInputTypes contains no definition for elementType: ' + elementType);
        } else {
            thisWidgetData = fts.ftsInputTypes[elementType].widgetData;
        }
        return thisWidgetData;
    },
    getWidgetDataByRoot: function (rootObject) {
        var id = fts.getID(rootObject);
        var elementType = fts.getElementTypeByID(id);
        var thisWidgetData = null;
        if (!fts.ftsInputTypes[elementType]) {
            console.log('ERROR  fts.getWidgetDataByRoot: no definition for elementType: ' + elementType);
        }
        else {
            thisWidgetData = fts.ftsInputTypes[elementType].widgetData;
        }
        return thisWidgetData;
    },
    getBlockByID: function (id) {
        var elementType = fts.getElementTypeByID(id);
        var elementEntry = fts.ftsInputTypes[elementType];
        return ftsConfig[elementEntry.block];
    },
    getBlockTypeByID: function (id) {
        return fts['ftsInputTypes'][fts.getElementTypeByID(id)].block;
    },
    getGridRowByID: function (gridID, property, value) { //example params: ('grid_Projects', 'ProjectID', 35)
        var matchingRow;
        var grid = $('#' + gridID).data('kendoGrid');
        var rows = grid.items();
        for (var i = 0; i < rows.length; i++) {
            var row = rows[i];
            var row_dataItem = grid.dataItem(row);
            if (row_dataItem[property] === value) {
                matchingRow = row_dataItem;
                break;
            }
        }
        return matchingRow;
    },
    getGridRowsByKeyValue: function (gridID, key, keyValue) {
        var grid = $('#' + gridID).data('kendoGrid');
        var gridRows = grid.items();
        var returnRow = null;

        if (gridRows.length > 0) {
            for (i = 0; i < gridRows.length; i++) {
                var gridRow = grid.dataItem(gridRows[i]);
                if (gridRow[key] === keyValue) {
                    returnRow = gridRow;
                    break;
                }
            }
        }
        return returnRow;
    },
    getGridRowOfClickedButton: function (e) {
        var grid = $('#' + e.delegateTarget.id).data('kendoGrid');
        var rowElement = e.currentTarget.parentNode.parentNode;
        var uid = rowElement.attributes['data-uid'].value;
        fts.rowOfClickedButton = grid.table.find('tr[data-uid="' + uid + '"]');
        var dataItem = grid.dataItem(fts.rowOfClickedButton);
        return dataItem;
    },
    getOuterHeight: function (element) {
        var innerHeight = element.height();
        var padding = parseInt(element.css('padding-top').split('px')[0]) + parseInt(element.css('padding-bottom').split('px')[0]);
        var border = parseInt(element.css('border-top-width').split('px')[0]) + parseInt(element.css('border-bottom-width').split('px')[0]);
        var margin = parseInt(element.css('margin-top').split('px')[0]) + parseInt(element.css('margin-bottom').split('px')[0]);
        var outerHeight = innerHeight + padding + border + margin;
        return outerHeight;
    },
    getOuterWidth: function (element) {
        var innerWidth = element.width();
        var padding = parseInt(element.css('padding-left').split('px')[0]) + parseInt(element.css('padding-right').split('px')[0]);
        var border = parseInt(element.css('border-left-width').split('px')[0]) + parseInt(element.css('border-right-width').split('px')[0]);
        var margin = parseInt(element.css('margin-left').split('px')[0]) + parseInt(element.css('margin-right').split('px')[0]);
        var outerWidth = innerWidth + padding + border + margin;
        return outerWidth;
    },
    getRootBlockByID: function (id) {
        var elementType = fts.getElementTypeByID(id);
        var rootBlock = fts.ftsInputTypes[elementType].block;
        return rootBlock;
    },
    getRadioGroupValue: function (radioGroupRoot) {
        var radioGroupID = fts.getID(radioGroupRoot);
        var radioButtons = $('#' + radioGroupID + ' .ftsRadioButton');
        var value;
        for (var i = 0; i < radioButtons.length; i++) {
            if (radioButtons[i].checked) {
                value = radioButtons[i].value;
                break;
            }
        }
        return value;
    },
    gridErrorHandler: function (e) {
        if (e.errors) {
            var message = 'Error:\n';
            // Create a message containing all errors.
            $.each(e.errors, function (key, value) {
                if ('errors' in value) {
                    $.each(value.errors, function (e) {
                        message += this + '\n';
                    });
                }
            });
            // Display the message.
            alert(message);
            // Cancel the changes.
            this.cancelChanges();
        }
    },
    getSelectedGridRow: function (gridID) {
        var grid = fts.getWidgetByRoot(orionGrids[gridID]);
        var row = grid.table.find('tr.k-state-selected');
        return row;
    },
    hideloadingWrapper: function (e) {
        $('.ftsWrapper--loading').fadeOut(500);
        $('.ftsWrapper--page').fadeIn(1000);
    },
    html: {
        label: function (root) {
            var id = fts.getID(root);
            var labelText = '';
            if (root.labelText !== undefined) {
                labelText = root.labelText;
            }
            var labelClass = fts.getElement(root).hasClass('ftsRequiredField') ? 'ftsLabel ftsLabel--requiredField' : 'ftsLabel';
            var labelElement = '<label for="' + id + '" class="' + labelClass + '">' + labelText + '</label>';
            return labelElement;
        },
        radioButton: function (id, value) {
            var radioButtonHTML = '<input' +
                ' id="' + id + '" type="radio" class="ftsRadioButton"' +
                ' value="' + value + '"' +
                ' onchange="fts.config.ftsRadioGroup.onChange" />';
            return radioButtonHTML;
        },
        //radioButton: function (radioGroup, option) {
        //    var id = 'radio_' + radioGroup.id.split('_')[1] + option.name;
        //    var thisClass = 'ftsRadioButton';
        //    var type = 'radio';
        //    var html =
        //        '<input' +
        //            ' id="' + id + '"' +
        //            ' type="' + type + '"' +
        //            ' class="' + thisClass + '"' +
        //            ' value="' + option.value + '"' +
        //            ' onchange="' + option.onChange + '"' +
        //        ' />';
        //    return '<td>' + html + '</td>';
        //},
        table: {
            openingTag: function (columnWidths) {
                var columns = '';
                $.each(columnWidths, function (index, colWidth) {
                    columns += '<col class="col-md-' + colWidth + '" />';
                });
                var openingTableTag =
                    '<table class="ftsTable">' +
                        '<colgroup>' +
                            columns +
                        '</colgroup>';
                return openingTableTag;
            },
            closingTag: '</table>',
            row: {
                openingTag: '<tr>',
                closingTag: '</tr>'
            },
            cell: {
                openingTag: '<td>',
                closingTag: '</td>'
            }
        }
    },
    isDateField: function (fieldName) {
        return fieldName.substring(fieldName.length - 4) === 'Date';
    },
    isNull: function (value) {
        return value === null || value === '' || value === undefined || value === 0;
    },
    labelHelper: function (className) {
        var wrapper;
        var input;
        var id;
        var labelText = '';
        var labelClass;
        var labelElement;
        var inputs;

        //console.log('fts.labelHelper(' + className + ')');

        if (className === 'ftsDropDownList') {
            inputs = $('span.k-widget.' + className);
            for (var i = 0; i < inputs.length; i++) {
                wrapper = $(inputs[i]);
                input = wrapper.find('input.' + className)[0];
                id = input.id;
                labelText = orionInputs[id].labelText;
                if (labelText !== '') {
                    labelClass = $(input).hasClass('ftsRequiredField') ? 'ftsLabel ftsLabel--requiredField' : 'ftsLabel';
                    labelElement = '<label for="' + id + '" class="' + labelClass + '">' + labelText + '</label>';
                    wrapper.before(labelElement);
                }
            }
        }
        else if (className === 'ftsDatePicker') {
            inputs = $('span.k-widget.' + className);
            for (var j = 0; j < inputs.length; j++) {
                wrapper = $(inputs[j]);
                input = wrapper.find('input.' + className)[0];
                id = input.id;
                labelText = orionInputs[id].labelText;
                if (labelText !== '') {
                    labelClass = $(input).hasClass('ftsRequiredField') ? 'ftsLabel ftsLabel--requiredField' : 'ftsLabel';
                    labelElement = '<label for="' + id + '" class="' + labelClass + '">' + labelText + '</label>';
                    wrapper.before(labelElement);
                }
            }
        }
        else if (className === 'ftsNumericTextBox') {
            inputs = $('span.k-widget.' + className);
            for (var k = 0; k < inputs.length; k++) {
                wrapper = $(inputs[k]);
                input = wrapper.find('input.' + className + ':not(.k-formatted-value)')[0];
                id = input.id;
                labelText = orionInputs[id].labelText;
                if (labelText !== '') {
                    labelClass = $(input).hasClass('ftsRequiredField') ? 'ftsLabel ftsLabel--requiredField' : 'ftsLabel';
                    labelElement = '<label for="' + id + '" class="' + labelClass + '">' + labelText + '</label>';
                    wrapper.before(labelElement);
                }
            }
        }
        else if (className === 'ftsTextBox' || className === 'ftsTextArea') {
            inputs = $('.' + className);
            for (var n = 0; n < inputs.length; n++) {
                input = $(inputs[n]);
                id = input[0].id;
                if (orionInputs[id] === undefined) {
                    console.log('orionInputs[' + id + '] === undefined');
                } else {
                    if (orionInputs[id].labelText !== undefined) {
                        labelText = orionInputs[id].labelText;
                    }
                    if (labelText !== '') {
                        labelClass = $(input).hasClass('ftsRequiredField') ? 'ftsLabel ftsLabel--requiredField' : 'ftsLabel';
                        labelElement = '<label for="' + id + '" class="' + labelClass + '">' + labelText + '</label>';
                        input.before(labelElement);
                    }
                }
            }
        }
        else if (className === 'ftsCheckbox') {
            inputs = $('.' + className);
            for (var m = 0; m < inputs.length; m++) {
                input = $(inputs[m]);
                id = input[0].id;
                if (orionInputs[id] !== undefined) {
                    if (orionInputs[id].labelText !== undefined) {
                        labelText = orionInputs[id].labelText;
                    }
                    labelText = orionInputs[id].labelText;
                    var labelPosition = fts.isNull(orionInputs[id].labelPosition) ? fts.staticValues.css.before : orionInputs[id].labelPosition;
                    if (!fts.isNull(labelText)) {
                        labelClass = $(input).hasClass('ftsRequiredField') ? 'ftsLabel ftsLabel--requiredField' : 'ftsLabel';
                        labelElement = '<label for="' + id + '" class="' + labelClass + '">' + labelText + '</label>';
                        input[labelPosition](labelElement);
                    }
                }
            }
        }
    },
    openUserManual: function () {
        console.log('fts.openUserManual (empty function)');
    },
    openWindow: function (root) {

        var window = fts.getElement(root);
        if (ftsConfig.ftsWindow.openedWindows.openedWindow !== null) {
            if (ftsConfig.ftsWindow.openedWindows.secondOpenedWindow === null) {
                ftsConfig.ftsWindow.openedWindows.secondOpenedWindow = ftsConfig.ftsWindow.openedWindows.openedWindow;
                ftsConfig.ftsWindow.ignoreWindowCloseEvent = true;
                ftsConfig.ftsWindow.openedWindows.secondOpenedWindow.data('kendoWindow').close();
            } else {
                ftsConfig.ftsWindow.openedWindows.thirdOpenedWindow = ftsConfig.ftsWindow.openedWindows.secondOpenedWindow;
                ftsConfig.ftsWindow.openedWindows.secondOpenedWindow = ftsConfig.ftsWindow.openedWindows.openedWindow;
                ftsConfig.ftsWindow.ignoreWindowCloseEvent = true;
                ftsConfig.ftsWindow.openedWindows.thirdOpenedWindow.data('kendoWindow').close();
            }
        } else {
            ftsConfig.ftsScreenDimmer.show(true);
        }
        ftsConfig.ftsWindow.openedWindows.openedWindow = window;
        window.data('kendoWindow').center().open();
    },
    parseGridData: function (response) {
        var data = response.Data;
        var results = [];
        $.each(data, function (index, value) {
            results.push(value);
        });
        return results;
    },
    populateObjectWithInputValues: function (object, inputs) {
        $.each(object, function (key, value) {
            $.each(inputs, function (index, input) {
                if (orionInputs[fts.getID(input)].keyName === key) {
                    object[key] = orionInputs[fts.getID(input)].value();
                }
            });
        });
        return object;
    },
    exportButton_Click: function (e) {
        console.log('fts.exportButton_Click');
        var buttonID = e.id;
        var gridID = buttonID.split('exportButton_')[1];
        var grid = fts.getWidgetByRoot(orionGrids[gridID]);
        grid.saveAsExcel();
        //TODO: figure out how to export grid
    },
    refreshButton_Click: function (e) {
        var buttonID = e.id;
        var gridID = buttonID.split('refreshButton_')[1];
        orionGrids[gridID].refresh();
    },
    refreshGrid: function (gridRoot) {
        var grid = fts.getWidgetByRoot(gridRoot);
        grid.dataSource.read();
    },
    resetInputs: function (inputs) {
        $.each(inputs, function (key, input) {
            fts.value(input, 'ftsReset');
        });
    },
    resizeGridContent: function (gridID) {
        var gridContent = $('#' + gridID + ' > div.k-grid-content');
        var height = '32px';
        gridContent.css('height', 'calc(100% - ' + height + ')');
    },
    rowOfClickedButton: null,
    saveInfoView: function (root) {
        var inputs = root.getInputs();
        if (fts.validateFields(inputs)) {

            //var dataObject = fts.populateObjectWithInputValues(root.itemBeingEdited, inputs);
            root.upsert(dataObject);
        }
    },
    setGridBadge: function (gridID) {
        var grid = $('#' + gridID).data('kendoGrid');
        var totalItems = grid.dataSource.total();
        var gridNameSplit = gridID.split('_')[1];
        var badge = $('#badge_' + gridNameSplit);
        badge.attr('style', 'background-color: ' + (totalItems > 0 ? 'red' : '#777777'));
        badge.html(totalItems > 0 ? totalItems : 0);
    },
    setHeightRelativeToSiblings: function (elements) {
        if (elements.length > 0) {
            for (var i = 0; i < elements.length; i++) {
                var element = $(elements[i]);
                var siblings = element.siblings();
                var siblings_Height = 0;
                if (siblings.length > 0) {
                    for (var n = 0; n < siblings.length; n++) {
                        var sibling = $(siblings[n]);
                        var display = sibling.css('display');
                        if (display !== 'none' && !sibling.hasClass('k-loading-mask')) {
                            var sibling_Height = fts.getOuterHeight(sibling);
                            siblings_Height += sibling_Height;
                        }
                    }
                }
                var element_Height = 'calc(100% - ' + siblings_Height + 'px)';
                element.css('height', element_Height);
            }
        }
    },
    setInputsToModelValues: function (rootObject) {
        $.each(rootObject.getInputs(), function (key, input) {
            var inputKey = orionInputs[input.id].keyName;
            fts.value(input, rootObject.selectedItem[inputKey]);
        });
    },
    setPageTitle: function (newTitle) {
        $($(document).find('title')).html(newTitle);
    },
    smoothScroll: function (scrollElement, scrollDistance) {
        // This is a work in progress
        var milliseconds = 400;
        var increments = 5;

        var msPerIncrement = milliseconds / increments;
        var pixelsPerIncrement = Math.floor(scrollDistance / increments);
        var remainingPixels = scrollDistance - (pixelsPerIncrement * increments);

        var i = increments;
        while (i > 0) {
            $(scrollElement).scrollTop(pixelsPerIncrement);
        }
        $(scrollElement).scrollTop(remainingPixels);
    },
    staticValues: {
        css: {
            before: 'before',
            after: 'after'
        },
        colors: {
            primary: {
                blue: {
                    lightest: '#',
                    light: '#d2d7ee',
                    neutral: '#0000ff',
                    dark: '#2b386f',
                    darkest: '#'
                },
                red: {
                    lightest: '#',
                    light: '#ffdddd',
                    neutral: '#ff0000',
                    dark: '#600000',
                    darkest: '#'
                },
                yellow: {
                    lightest: '#',
                    light: '#fff2cc',
                    neutral: '#ffff00',
                    dark: '#806000',
                    darkest: '#'
                }
            },
            secondary: {
                orange: {
                    lightest: '#ffe5d5',
                    light: '#ff9b5d',
                    neutral: '#ff6600',
                    dark: '#b04300',
                    darkest: '#602500'
                },
                green: {
                    lightest: '#',
                    light: '#e2efda',
                    neutral: '#00ff00',
                    dark: '#548235',
                    darkest: '#'
                },
                purple: {
                    lightest: '#',
                    light: '#',
                    neutral: '#6600ff',
                    dark: '#',
                    darkest: '#'
                }
            },
            grayScale: {
                white: '#ffffff',
                lighterGray: '#f5f5f5',
                lightGray: '#ccc',
                gray: '#a5a5a5',
                darkGray: '#7b7b7b',
                darkerGray: '#525252',
                black: '#000000'
            }
        }
    },
    togglePrimaryPanels: function () {
        var collapsedHeight_string = orionElements.gridwrapper_Projects.collapsedHeight;
        var collapsedHeight = parseInt(collapsedHeight_string.split('px')[0]);
        var gridWrapperHeight = fts.getElement(orionElements.gridwrapper_Projects).height();
        if (gridWrapperHeight > collapsedHeight) {
            orionElements.gridwrapper_Projects.collapse();
            orionElements.contentwrapper_Projects.expand();
            orionGrids.grid_Projects.removeNonSelectedRows();            
            var grid = orionSessionVariables.UserGroupID === orionStaticValues.userGroupIDs.CompanyTravelAdministrator
                ? orionGrids.grid_EmployeeProjectAssignments
                : orionGrids.grid_VendorProjectAssignments;
            grid.refresh();
        }
        else {
            orionElements.gridwrapper_Projects.expand();
            orionElements.contentwrapper_Projects.collapse();
            orionGrids.grid_Projects.refresh();
        }
    },
    togglePageWrappers: function (e) {
        var currentTab = $($('.ftsNavbar__tab--active')[0]);
        var currentPageTitle = currentTab.html();
        var targetTab = $(e);
        var targetPageTitle = targetTab.html();
        var targetPageWrapper = $('#pagewrapper_' + targetPageTitle);
        var pages;
        if (orionSessionVariables.UserGroupID === orionStaticValues.userGroupIDs.SuperUser || orionSessionVariables.UserGroupID === orionStaticValues.userGroupIDs.TravelCoordinator) {
            pages = ['Projects', 'Vendors', 'Reports'];
        } else if (orionSessionVariables.UserGroupID === orionStaticValues.userGroupIDs.CompanyTravelAdministrator) {
            pages = ['Projects', 'Employees', 'Reports'];
        }

        if (currentPageTitle !== targetPageTitle) {
            fts.setPageTitle('Vendor Travel Management - ' + targetPageTitle);
            $.each(pages, function (index, value) {
                var showOrHide = value === targetPageTitle ? 'show' : 'hide';
                var tabID = 'navbartab_' + value;
                orionElements[tabID][showOrHide]();
                orionElements['pagewrapper_' + value][showOrHide]();
            });
            $('.ftsNavbar__tab--active').removeClass('ftsNavbar__tab--active');
            targetTab.addClass('ftsNavbar__tab--active');
            $('.ftsPageWrapper--active').removeClass('ftsPageWrapper--active');
            targetPageWrapper.addClass('ftsPageWrapper--active');
        }

    },
    validateEmail: function validateEmail(email) {
        var lowercaseEmail = '';
        for (var i = 0; i < email.length; i++) {
            var char = email[i];
            if (char.toUpperCase() === char) {
                lowercaseEmail += char.toLowerCase();
            }
            else {
                lowercaseEmail += char;
            }
        }
        var re = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
        return re.test(lowercaseEmail);
    },
    validateOnlyOneEmail: function (email) {
        var atSignCount = 0;
        var onlyOneEmailExists = true;
        for (var i = 0; i < email.length; i++) {
            if (email[i] === '@') {
                atSignCount++;
            }
        }
        if (atSignCount > 1) {
            onlyOneEmailExists = false;
        }
        return onlyOneEmailExists;
    },
    validateFields: function (root) {
        var validationPassed = true;
        var requiredFieldInputs = [];
        $.each(root.itemBeingEdited, function (inputID, value) {
            if (fts.getElement(root).hasClass('ftsRequiredField')) {
                requiredFieldInputs.push(root);
            }
        });
        var blankRequiredFields = '';
        for (var i = 0; i < requiredFieldInputs.length; i++) {
            var input = requiredFieldInputs[i];
            if (!fts.value(input)) {
                blankRequiredFields += '\n    ' + input.labelText;
            }
        }
        if (blankRequiredFields !== '') {
            validationPassed = false;
            alert('The following fields cannot be blank:' + blankRequiredFields);
        }
        return validationPassed;
    },
    validation: function (root) {
        var validationPassed = true;
        var requiredFieldInputs = [];

        $.each(root.itemBeingEdited, function (inputID, value) {
            var inputRoot = orionInputs[inputID];
            if (fts.getElement(inputRoot).hasClass('ftsRequiredField')) {
                requiredFieldInputs.push(inputRoot);
            }
        });
        var blankRequiredFields = '';
        for (var i = 0; i < requiredFieldInputs.length; i++) {
            var input = requiredFieldInputs[i];
            if (!fts.value(input)) {
                blankRequiredFields += '\n    ' + input.labelText;
            }
        }
        if (blankRequiredFields !== '') {
            validationPassed = false;
            alert('The following fields cannot be blank:' + blankRequiredFields);
        }
        return validationPassed;
    },
    value: function (root, value) {
        var elementID = fts.getID(root);
        //console.log('fts.value called for element: ' + elementID);
        var inputType = elementID.split('_')[0];
        var baseElement = $('#' + elementID);
        var input;
        var startingValue;
        var newValue;
        if (inputType === 'datepicker') {
            input = baseElement.data('kendoDatePicker');
            startingValue = input.value();
            newValue = value === 'ftsReset' ? null : value ? value : startingValue;
            if (startingValue !== newValue) {
                input.value(newValue);
            }
            else {
                return kendo.toString(newValue, "d");
            }
        }
        else if (inputType === 'ddl') {
            input = baseElement.data('kendoDropDownList');
            startingValue = input.value();
            newValue = value === 'ftsReset' ? null : value ? value : startingValue;
            if (startingValue !== newValue) {
                input.value(newValue);
            }
            var returnValue = fts.isNull(newValue) ? null : parseInt(newValue);
            return returnValue;
        }
        else if (inputType === 'textbox' || inputType === 'textarea' || inputType === 'toggleselector') {
            input = baseElement;
            startingValue = input.val();
            if (value === 'ftsReset') {
                newValue = '';
            } else if (value) {
                newValue = value;
            } else {
                newValue = startingValue;
            }
            if (startingValue !== newValue) {
                input.val(newValue);
            }
            else {
                return newValue;
            }
        }
        else if (inputType === 'multiselect') {
            input = baseElement.data('kendoMultiSelect');
            startingValue = input.value();
            newValue = value === 'ftsReset' ? null : value ? value : startingValue;
            if (startingValue !== newValue) {
                input.value(newValue);
            }
            else {
                return newValue;
            }
        }
        else if (inputType === 'numerictextbox') {
            input = baseElement.data('kendoNumericTextBox');
            startingValue = input.value();
            newValue = value === 'ftsReset' ? 0 : value ? value : startingValue;
            if (startingValue !== newValue) {
                input.value(newValue);
            }
            else {
                return parseInt(newValue);
            }
        }
        else if (inputType === 'checkbox' || inputType === 'radio') {
            input = baseElement;
            startingValue = input[0].checked;
            if (value === 'ftsReset') {
                newValue = orionInputs[elementID].defaultCheckedValue;
            } else if (value) {
                newValue = value;
            } else {
                newValue = startingValue;
            }

            if (startingValue !== newValue) {
                input[0].checked = newValue;
            }
            else {
                return newValue;
            }
        }
        else if (inputType === 'radiogroup') {
            input = baseElement;
            startingValue = null;
            var radioButtons = $('#' + input[0].id + ' .ftsRadioButton');
            for (var i = 0; i < radioButtons.length; i++) {
                if (radioButtons[i].checked) {
                    startingValue = parseInt(radioButtons[i].value);
                    break;
                }
            }
            if (value === 'ftsReset') {
                $.each(radioButtons, function (index, radioButton) {
                    radioButton.checked = false;
                });
            }
            else if (value) {
                $.each(radioButtons, function (index, radioButton) {
                    if (parseInt(radioButton.value) === value) {
                        radioButton.checked = true;
                    } else {
                        radioButton.checked = false;
                    }
                });
            }
            else {
                return startingValue;
            }
        }
        //else if (inputType === 'toggleselector') {
        //    input = baseElement;
        //    startingValue = null;
        //    if (value === 'ftsReset') {
        //        newValue = '';
        //    } else if (value) {
        //        newValue = value;
        //    } else {
        //        newValue = startingValue;
        //    }
        //    if (startingValue !== newValue) {
        //        input.val(newValue);
        //    }
        //    else {
        //        return newValue;
        //    }
        //}
        else {
            console.log('ERROR: fts.value');
        }
    }
};

//#region prevent 'Escape' key from closing kendo windows
$(function () {
    kendo.ui.Window.fn._keydown = function (originalFn) {
        var KEY_ESC = 27;
        return function (e) {
            if (e.which !== KEY_ESC) {
                originalFn.call(this, e);
            }
        };
    };
});
//#endregion

//#region Idle Logout Timer
var idleTime = 0;
$(document).ready(function () {
    //Increment the idle time counter every minute.
    var idleInterval = setInterval(timerIncrement, 60000); // 1 minute

    // Zero the idle timer on mouse movement.
    //$(this).mousemove(function (e) {
    //    idleTime = 0;
    //});

    // Zero the idle timer on key press
    //$(this).keypress(function (e) {
    //    idleTime = 0;
    //});

    // Zero the idle timer on mouse click
    $(this).mousedown(function (e) {
        idleTime = 0;
    });
});

function timerIncrement() {
    idleTime++;
    // idle timeout set to 20 minutes (idleTime > 19)
    if (idleTime > 19) {
        location.href = "Login";
    }
}
//#endregion