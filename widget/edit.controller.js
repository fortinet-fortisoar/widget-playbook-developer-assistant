/* Copyright start
  MIT License
  Copyright (c) 2026 Fortinet Inc
  Copyright end */

'use strict';
(function () {
    angular
        .module('cybersponse')
        .controller('editPlaybookDeveloperAssistant110Ctrl', editPlaybookDeveloperAssistant110Ctrl);

        editPlaybookDeveloperAssistant110Ctrl.$inject = ['$scope', 'config', 'widgetUtilityService', '$uibModalInstance'];

    function editPlaybookDeveloperAssistant110Ctrl($scope, config, widgetUtilityService, $uibModalInstance) {
        $scope.config = config;
        $scope.cancel = cancel;

        function _handleTranslations() {
            let widgetData = {
              name: $scope.config.name,
              version: $scope.config.version
            };
            let widgetNameVersion = widgetUtilityService.getWidgetNameVersion(widgetData);
            if (widgetNameVersion) {
              widgetUtilityService.checkTranslationMode(widgetNameVersion).then(function () {
                $scope.viewWidgetVars = {
                  // Create your translating static string variables here]
                  BTN_OK: widgetUtilityService.translate('playbookDeveloperAssistant.BTN_OK'),
                  NO_INPUT_REQUIRED: widgetUtilityService.translate('playbookDeveloperAssistant.NO_INPUT_REQUIRED')
                };
              });
            }
            else {
              $timeout(function () {
                cancel();
              }, 100)
            }
          }

        function cancel() {
            $uibModalInstance.dismiss('cancel');
        }

        function init() {
            // To handle backward compatibility for widget
            _handleTranslations();
        }

        init();
    }
})();
