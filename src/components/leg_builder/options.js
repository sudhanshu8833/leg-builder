import React, { useContext } from 'react'
import {
    LegBuilderBox,
    BoldLabel,
    ButtonToggle,
    NumberInput,
    MultiSelect,
    AddLegButton,
    LabelChildren,
    StrikeElementReturn,
    getStrikeParameterArray
} from '../utils'
import { LegContext } from '../../config'
import LegConstants from '../constants/leg_constants'

const Options = ({ onChange }) => {
  const { globalData, updateGlobalData } = useContext(LegContext)

  const handleChange = (key, value, strikeCriteria = null) => {
    updateGlobalData(key, value)
    if (strikeCriteria) {
      const strikeParameterArray = getStrikeParameterArray(value)
      updateGlobalData('options.StrikeParameter.value', strikeParameterArray)
    }
  }
  const addLeg = () => {
    const legObject = {
      [LegConstants.LEG_TYPE]: 'options',
      [LegConstants.POSITION_TYPE]: globalData.options.position,
      [LegConstants.LOTS]: globalData.options.lots,
      [LegConstants.INSTRUMENT_KIND]: globalData.options.optionType,
      [LegConstants.EXPIRY_KIND]: globalData.options.expiry,
      [LegConstants.ENTRY_TYPE]: globalData.options.strikeCriteria,
      [LegConstants.STRIKE_PARAMETER]: {
        value: globalData.options.StrikeParameter.value,
      },
      ...JSON.parse(JSON.stringify(LegConstants.DEFAULT_LEG_VALUES)),
    }

    handleChange('legs', [...globalData.legs, legObject])
  }

  return (
    <div>
      <div className='text-left pt-4 pl-5'>
        <BoldLabel text='Leg Builder' />
      </div>
      <LegBuilderBox>
        <div className='flex flex-col gap-5 justify-center items-center p-4'>
          <div className='flex flex-wrap gap-10 justify-center items-center p-2'>
            <LabelChildren label='Select Segments'>
              <ButtonToggle
                left={LegConstants.FUTURES}
                right={LegConstants.OPTIONS}
                defaultValue={LegConstants.OPTIONS}
                onChange={onChange}
              />
            </LabelChildren>
            <LabelChildren label='Total Lot'>
              <NumberInput
                text=''
                initialValue='1'
                onChange={(value) => handleChange('options.lots', value)}
              />
            </LabelChildren>
            <LabelChildren label='Position'>
              <ButtonToggle
                left={LegConstants.BUY}
                right={LegConstants.SELL}
                defaultValue={LegConstants.BUY}
                onChange={(value) => handleChange('options.position', value)}
              />
            </LabelChildren>
            <LabelChildren label='Option Type'>
              <ButtonToggle
                left={LegConstants.CALL}
                right={LegConstants.PUT}
                defaultValue={LegConstants.CALL}
                onChange={(value) => handleChange('options.optionType', value)}
              />
            </LabelChildren>
            <LabelChildren label='Expiry'>
              <MultiSelect
                options={LegConstants.MULTI_EXPIRY_TYPE}
                onChange={(value) => handleChange('options.expiry', value)}
              />
            </LabelChildren>
            <LabelChildren label='Select Strike Criteria'>
              <MultiSelect
                initialValue={globalData.options.strikeCriteria}
                options={LegConstants.MULTI_ENTRY_TYPE}
                onChange={(value) => handleChange('options.strikeCriteria', value, true)}
              />
            </LabelChildren>
            <StrikeElementReturn
              strikeCriteria={globalData.options.strikeCriteria}
              onChange={handleChange}
              type='options'
            />
          </div>
          <AddLegButton text='Add Leg' onClick={addLeg} defaultValue={false} />
        </div>
      </LegBuilderBox>
    </div>
  )
}

export default Options
