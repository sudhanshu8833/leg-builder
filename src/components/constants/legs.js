
class Legs {

    // Legs keys
    static POSITION_TYPE = "PositionType";
    static LOTS = "Lots";
    static INSTRUMENT_KIND = "InstrumentKind";
    static EXPIRY_KIND = "ExpiryKind";
    static ENTRY_TYPE = "EntryType";
    static STRIKE_PARAMETER = "StrikeParameter";
    static LEG_STOP_LOSS = "LegStopLoss";
    static LEG_TARGET = "LegTarget";
    static LEG_TRAIL_SL = "LegTrailSL";
    static LEG_MOMENTUM = "LegMomentum";
    static LEG_REENTRY_SL = "LegReentrySL";
    static LEG_REENTRY_TP = "LegReentryTP";


    // Legs values
    static BUY = { value: "PositionType.Buy", label: "Buy" };
    static SELL = { value: "PositionType.Sell", label: "Sell" };

    static SL_TYPE_PERCENT = { value: "LegTgtSLType.Percentage", label: "Percentage" };
    static SL_TYPE_POINTS = { value: "LegTgtSLType.Points", label: "Points" };
    static SL_TYPE_UNDERLYING_PERCENT = { value: "LegTgtSLType.UnderlyingPercentage", label: "Underlying Percentage" };
    static SL_TYPE_UNDERLYING_POINTS = { value: "LegTgtSLType.UnderlyingPoints", label: "Underlying Points" };

    static TP_TYPE_PERCENT = { value: "LegTgtTPType.Percentage", label: "Percentage" };
    static TP_TYPE_POINTS = { value: "LegTgtTPType.Points", label: "Points" };
    static TP_TYPE_UNDERLYING_PERCENT = { value: "LegTgtTPType.UnderlyingPercentage", label: "Underlying Percentage" };
    static TP_TYPE_UNDERLYING_POINTS = { value: "LegTgtTPType.UnderlyingPoints", label: "Underlying Points" };

    static MOM_TYPE_POINTS_UP = { value: "LegMomentumType.PointsUp", label: "Points Up" };
    static MOM_TYPE_POINTS_DOWN = { value: "LegMomentumType.PointsDown", label: "Points Down" };
    static MOM_TYPE_PERCENT_UP = { value: "LegMomentumType.PercentageUp", label: "Percentage Up" };
    static MOM_TYPE_PERCENT_DOWN = { value: "LegMomentumType.PercentageDown", label: "Percentage Down" };
    static MOM_TYPE_UNDERLYING_POINTS_UP = { value: "LegMomentumType.UnderlyingPointsUp", label: "Underlying Points Up" };
    static MOM_TYPE_UNDERLYING_POINTS_DOWN = { value: "LegMomentumType.UnderlyingPointsDown", label: "Underlying Points Down" };
    static MOM_TYPE_UNDERLYING_PERCENT_UP = { value: "LegMomentumType.UnderlyingPercentageUp", label: "Underlying Percentage Up" };
    static MOM_TYPE_UNDERLYING_PERCENT_DOWN = { value: "LegMomentumType.UnderlyingPercentageDown", label: "Underlying Percentage Down" };

    static REENTRY_TYPE_ASAP = { value: "ReentryType.ASAP", label: "ASAP" };
    static REENTRY_TYPE_REVERSE_ASAP = { value: "ReentryType.ASAPReverse", label: "ASAP Reverse" };
    static REENTRY_TYPE_MOMENTUM = { value: "ReentryType.Momentum", label: "Momentum" };
    static REENTRY_TYPE_MOMENTUM_REVERSE = { value: "ReentryType.MomentumReverse", label: "Momentum Reverse" };
    static REENTRY_TYPE_COST = { value: "ReentryType.Cost", label: "Cost" };
    static REENTRY_TYPE_COST_REVERSE = { value: "ReentryType.CostReverse", label: "Cost Reverse" };
    static REENTRY_TYPE_LAZYLEG = { value: "ReentryType.LazyLeg", label: "Lazy Leg" };


    static STRIKE_TYPE = { value: "EntryType.EntryByStrikeType", label: "Strike Type" };
    static CLOSEST_PREMIUM = { value: "EntryType.EntryByClosestPremium", label: "Closest Premium" };
    static PREMIUM_GREATER_THAN = { value: "EntryType.EntryByPremiumGreaterThan", label: "Premium >=" };
    static PREMIUM_LESS_THAN = { value: "EntryType.EntryByPremiumLessThan", label: "Premium <=" };
    static PREMIUM_RANGE = { value: "EntryType.EntryByPremiumRange", label: "Premium Range" };
    static STRADDLE_WIDTH = { value: "EntryType.EntryByStraddleWidth", label: "Straddle Width" };
    static PERCENT_OF_ATM = { value: "EntryType.EntryByPercentOfATM", label: "% of ATM" };
    static SYNTHETIC_FUTURE = { value: "EntryType.EntryBySyntheticFuture", label: "Synthetic Future" };

    static MULTI_ENTRY_TYPE = [
        Legs.STRIKE_TYPE.label,
        Legs.CLOSEST_PREMIUM.label,
        Legs.PREMIUM_GREATER_THAN.label,
        Legs.PREMIUM_LESS_THAN.label,
        Legs.PREMIUM_RANGE.label,
        Legs.STRADDLE_WIDTH.label,
        Legs.PERCENT_OF_ATM.label,
        Legs.SYNTHETIC_FUTURE.label
    ];

    static MULTI_POSITION_TYPE = [
        Legs.BUY.label,
        Legs.SELL.label
    ];

    static MULTI_SL_TYPE = [
        Legs.SL_TYPE_PERCENT.label,
        Legs.SL_TYPE_POINTS.label,
        Legs.SL_TYPE_UNDERLYING_PERCENT.label,
        Legs.SL_TYPE_UNDERLYING_POINTS.label
    ];

    static MULTI_TP_TYPE = [
        Legs.TP_TYPE_PERCENT.label,
        Legs.TP_TYPE_POINTS.label,
        Legs.TP_TYPE_UNDERLYING_PERCENT.label,
        Legs.TP_TYPE_UNDERLYING_POINTS.label
    ];

    static MULTI_MOM_TYPE = [
        Legs.MOM_TYPE_POINTS_UP.label,
        Legs.MOM_TYPE_POINTS_DOWN.label,
        Legs.MOM_TYPE_PERCENT_UP.label,
        Legs.MOM_TYPE_PERCENT_DOWN.label,
        Legs.MOM_TYPE_UNDERLYING_POINTS_UP.label,
        Legs.MOM_TYPE_UNDERLYING_POINTS_DOWN.label,
        Legs.MOM_TYPE_UNDERLYING_PERCENT_UP.label,
        Legs.MOM_TYPE_UNDERLYING_PERCENT_DOWN.label
    ];

    static MULTI_REENTRY_TYPE = [
        Legs.REENTRY_TYPE_ASAP.label,
        Legs.REENTRY_TYPE_REVERSE_ASAP.label,
        Legs.REENTRY_TYPE_MOMENTUM.label,
        Legs.REENTRY_TYPE_MOMENTUM_REVERSE.label,
        Legs.REENTRY_TYPE_COST.label,
        Legs.REENTRY_TYPE_COST_REVERSE.label,
        Legs.REENTRY_TYPE_LAZYLEG.label
    ];
}