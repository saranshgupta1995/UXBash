import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';

const AccessControl = ({ t }) => {
    return (
        <div>
            <div>
                <div>{'Sorry!!!!You are not authorized to perform this action'}</div>
                <div>
                    <button>{'Okay'}</button>
                </div>
            </div>
        </div>
    );
};

AccessControl.propTypes = {
    t: PropTypes.func.isRequired
};

export default AccessControl;
