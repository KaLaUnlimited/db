module.exports = function(sequelize, DataTypes) {
    var Students = sequelize.define("Students", {
      student_id: {
        type: DataTypes.INTEGER,
        primarykey:true
      
      },
      student_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      student_photo: {
        type: DataTypes.STRING,
        allowNull: false,
       
      },
      grade_level: {
        type: DataTypes.STRING,
        allowNull: false
      },
      par_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      par_addr: {
        type: DataTypes.STRING,
        allowNull: false
      },
      par_csz: {
        type: DataTypes.STRING,
        allowNull: false
      },
      par_gvt_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: { 
          min: 100000000,
          max: 999999999
        }
       
      },
      student_status: {
        type: DataTypes.STRING,
        defaultValue: "NOT CHECKED",
        allowNull: false
      },

      student_checkin_time: {
        type: DataTypes.DATE,
        defaultValue:DataTypes.NULL
      },

      parent_status:{
        type:DataTypes.STRING,
        defaultValue:"NOT CHECKED",
      },

      parent_checkin_time:{
        type:DataTypes.DATE,
        defaultValue:DataTypes.NULL
        
      },

      united_status:{
        type:DataTypes.STRING,
        defaultValue:"NOT UNITED", 
        allowNull: false
      },

      united_time:{
        type:DataTypes.DATE,
        defaultValue:DataTypes.NULL
        
      },
     
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE 
       

    });

    // Students.belongsTo(models.Checkin_parent,{

    //     foreignKey:"par_govt_id"
    // })
    // Students.associate = function(models) {
      
    //     // A Post can't be created without an Author due to the foreign key constraint
    //     Students.belongsTo(models.Checkin_parent, {
    //       foreignKey:"par_govt_id"
          
    //     });
    //   };
  
    return Students;
  };