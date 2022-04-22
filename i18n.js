import I18n from 'react-native-i18n';

import fr_FR from './lang/fr_FR/fr_FR-owner.js'
import es_ES from './lang/es_ES/es_ES-owner.js'

I18n.fallbacks = true;

I18n.translations = {
    fr_FR,
    es_ES
};

export default I18n;