import {connect} from 'react-redux';

import ChannelNotificationsModal from './channel_notification_modal.jsx';

import {NotificationLevels} from 'utils/constants.jsx';

import {updateChannelNotifyProps} from 'actions/channel_actions.jsx';

function mapStateToProps(state, ownProps) {
    return {
        ...ownProps,
        notifyLevel: ownProps.channelMember.notify_props.desktop,
        unreadLevel: ownProps.channelMember.notify_props.mark_unread,
        pushLevel: ownProps.channelMember.notify_props.push || NotificationLevels.DEFAULT
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            updateChannelNotifyProps
        }, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelNotificationsModal);